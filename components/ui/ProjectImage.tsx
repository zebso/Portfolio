type ProjectImageProps = {
  title: string;
  status: string;
};

export function ProjectImage({ title, status }: ProjectImageProps) {
  return (
    <div className="projectImage" aria-label={`${title} interface preview`}>
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
