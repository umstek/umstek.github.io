export default function ProjectInfoItem({
  visible, icon, children,
}: {
  visible: boolean;
  icon: React.ReactNode;
  children: string;
}) {
  return visible ? (
    <span className="flex flex-row items-center mr-4">
      <span className="pt-1 text-rose-600">{icon}</span>
      <span className="pl-1">{children}</span>
    </span>
  ) : null;
}
