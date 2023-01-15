import { FC } from 'react';

const Highlight: FC<{ title: any; search?: string; description?: boolean }> = ({
  title,
  search,
  description,
}) => {
  function escapeRegExp(string: string) {
    return string?.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  if (!search?.trim()) {
    return <span className={description ? 'summary' : 'title'}>{title}</span>;
  }
  const regex = new RegExp(`(${escapeRegExp(search)})`, 'gi');
  const parts = title.split(regex);

  return (
    <span>
      {parts.map((part: any, i: number) =>
        regex.test(part) ? (
          <mark className={description ? 'summary' : 'title'} key={i}>
            {part}
          </mark>
        ) : (
          <span className={description ? 'summary' : 'title'} key={i}>
            {part}
          </span>
        ),
      )}
    </span>
  );
};

export default Highlight;
