import { GoTag } from 'react-icons/go/index';

const Tag = ({
  children,
  href,
  count,
  anchorClassName,
  openNewTab,
  className,
  ...rest
}: {
  children: string;
  href?: string;
  count?: number;
  anchorClassName?: string;
  openNewTab?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={[className, 'flex'].filter(Boolean).join(' ')} {...rest}>
      <span className="pr-1 pt-2 text-rose-600">
        <GoTag />
      </span>
      <a
        target={openNewTab ? '_blank' : '_self'}
        className={['cursor-pointer', anchorClassName].filter(Boolean).join(' ')}
        href={href}
      >
        <span>{children}</span>
      </a>
      {count && <span className="mx-1">({count})</span>}
    </div>
  );
};

export default Tag;
