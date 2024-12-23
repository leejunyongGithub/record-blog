export default function Content({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 h-[calc(100vh-172px)]">{children}</div>;
}
