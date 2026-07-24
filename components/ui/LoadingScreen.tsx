"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const loaderCompleteEvent = "zebso:loader-complete";

const minimumDuration = 700;
const exitFallbackDuration = 350;

type LoadingState = "loading" | "exiting" | "complete";

export function LoadingScreen() {
  const [loadingState, setLoadingState] =
    useState<LoadingState>("loading");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let loadComplete = document.readyState === "complete";
    let minimumComplete = reducedMotion;
    let minimumTimer: number | undefined;
    let exitFallbackTimer: number | undefined;
    let cancelled = false;

    const beginExit = () => {
      if (
        cancelled ||
        !loadComplete ||
        !minimumComplete
      ) {
        return;
      }

      if (reducedMotion) {
        setLoadingState("complete");
        return;
      }

      setLoadingState("exiting");
      exitFallbackTimer = window.setTimeout(() => {
        setLoadingState("complete");
      }, exitFallbackDuration);
    };

    const handleLoad = () => {
      loadComplete = true;
      beginExit();
    };

    if (!loadComplete) {
      window.addEventListener("load", handleLoad, { once: true });
    }

    if (!reducedMotion) {
      minimumTimer = window.setTimeout(() => {
        minimumComplete = true;
        beginExit();
      }, minimumDuration);
    }

    beginExit();

    return () => {
      cancelled = true;
      window.removeEventListener("load", handleLoad);

      if (minimumTimer !== undefined) {
        window.clearTimeout(minimumTimer);
      }

      if (exitFallbackTimer !== undefined) {
        window.clearTimeout(exitFallbackTimer);
      }
    };
  }, []);

  useEffect(() => {
    if (loadingState !== "complete") {
      return;
    }

    const root = document.documentElement;
    delete root.dataset.appLoading;
    window.dispatchEvent(new Event(loaderCompleteEvent));
  }, [loadingState]);

  if (loadingState === "complete") {
    return null;
  }

  return (
    <div
      className="loadingScreen"
      data-loading-state={loadingState}
      role="status"
      aria-label="Loading Zebso"
      onTransitionEnd={(event) => {
        if (
          loadingState === "exiting" &&
          event.propertyName === "opacity" &&
          event.currentTarget === event.target
        ) {
          setLoadingState("complete");
        }
      }}
    >
      <div className="loadingContent">
        <span className="loadingLogoReveal" aria-hidden="true">
          <Image
            className="loadingLogo"
            src="/icons/user.png"
            width={64}
            height={64}
            priority
            alt=""
          />
        </span>
        <p className="loadingBrand">Zebso</p>
      </div>
    </div>
  );
}
