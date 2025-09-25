export default function Container_Cards({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="grid gap-[12px] grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">{children}</div>;
}
