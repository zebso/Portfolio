import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  meta?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
  revealDelay?: number;
};

export function Card({
  title,
  description,
  meta,
  href,
  children,
  className,
  revealDelay
}: CardProps) {
  const revealAttributes =
    revealDelay === undefined
      ? {}
      : {
          "data-reveal": true,
          "data-reveal-delay": revealDelay
        };

  const content = (
    <>
      {meta ? <p className="cardMeta">{meta}</p> : null}
      <h2 className="cardTitle">{title}</h2>
      <p className="cardText">{description}</p>
      {children ? <div className="cardBody">{children}</div> : null}
    </>
  );

  if (href) {
    return (
      <Link
        className={`card cardLink ${className ?? ""}`}
        href={href}
        {...revealAttributes}
      >
        {content}
      </Link>
    );
  }

  return (
    <article className={`card ${className ?? ""}`} {...revealAttributes}>
      {content}
    </article>
  );
}
