"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { loaderCompleteEvent } from "@/components/ui/LoadingScreen";

const revealSelector = "[data-reveal]";

export function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const elements =
      document.querySelectorAll<HTMLElement>(revealSelector);

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
      return;
    }

    root.dataset.revealReady = "true";

    let firstFrame: number | undefined;
    let secondFrame: number | undefined;
    let observer: IntersectionObserver | undefined;
    let cancelled = false;
    let started = false;

    const startReveal = () => {
      if (cancelled || started) {
        return;
      }

      started = true;
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          if (cancelled) {
            return;
          }

          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  return;
                }

                const element = entry.target as HTMLElement;
                element.dataset.revealState = "visible";
                observer?.unobserve(element);
              });
            },
            {
              rootMargin: "0px 0px -8% 0px",
              threshold: 0.15
            }
          );

          elements.forEach((element) => {
            const bounds = element.getBoundingClientRect();

            if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
              element.dataset.revealState = "visible";
              return;
            }

            observer?.observe(element);
          });
        });
      });
    };

    const handleLoaderComplete = () => {
      startReveal();
    };

    if (root.dataset.appLoading === "true") {
      window.addEventListener(
        loaderCompleteEvent,
        handleLoaderComplete,
        { once: true }
      );
    } else if (document.readyState === "complete") {
      startReveal();
    } else {
      window.addEventListener("load", startReveal, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", startReveal);
      window.removeEventListener(
        loaderCompleteEvent,
        handleLoaderComplete
      );

      if (firstFrame !== undefined) {
        window.cancelAnimationFrame(firstFrame);
      }

      if (secondFrame !== undefined) {
        window.cancelAnimationFrame(secondFrame);
      }

      observer?.disconnect();
      delete root.dataset.revealReady;
    };
  }, [pathname]);

  return null;
}
