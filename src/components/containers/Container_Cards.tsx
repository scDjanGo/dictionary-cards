export default function Container_Cards({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="grid gap-[12px] grid-cols-1">{children}</div>;
}
