export default function Content({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 min-h-[calc(100vh-180px)] px-4">{children}</div>;
}
