import { JSX } from "react";

export default function Badge({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <span className="inline-block bg-white px-3 py-1 rounded-full text-xs shadow-sm text-slate-700 select-none">
      {children}
    </span>
  );
}
