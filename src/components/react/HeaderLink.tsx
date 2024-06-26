interface HeaderProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

function HeaderLink(props: HeaderProps) {
  const { href, className, children } = props;
  return (
    <a
      href={href}
      className={[className, 'px-4 opacity-100 hover:text-rose-600'].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </a>
  );
}

export default HeaderLink;
