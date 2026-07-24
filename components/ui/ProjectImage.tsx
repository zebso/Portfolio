type ProjectImageProps = {
  title: string;
  status: string;
  previewLabel: string;
};

export function ProjectImage({
  title,
  status,
  previewLabel
}: ProjectImageProps) {
  return (
    <div className="projectImage" aria-label={`${title} ${previewLabel}`}>
      <div className="projectImageTop">
        <span />
        <span />
        <span />
      </div>
      <div className="projectImageBody">
        <p>{title}</p>
        <span>{status}</span>
      </div>
    </div>
  );
}
