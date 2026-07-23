import { ButtonLink } from "@/components/ui/ButtonLink";

type EmptyStateProps = {
  title: string;
  text: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title,
  text,
  actionLabel,
  actionHref
}: EmptyStateProps) {
  return (
    <div className="emptyState">
      <h2>{title}</h2>
      <p>{text}</p>
      {actionHref && actionLabel ? (
        <ButtonLink href={actionHref} variant="secondary">
          {actionLabel}
        </ButtonLink>
      ) : null}
    </div>
  );
}
