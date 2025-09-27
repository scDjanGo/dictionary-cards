export default function Container_Categories({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`mt-[6px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6px_16px]`}
    >
      {children}
    </div>
  );
}
