type TagListProps = {
  tags: string[];
  ariaLabel?: string;
};

export function TagList({ tags, ariaLabel = "Tags" }: TagListProps) {
  return (
    <ul className="tagList" aria-label={ariaLabel}>
      {tags.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
