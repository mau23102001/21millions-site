
"use client";
import * as React from "react";

export function Accordion({ children }:{children:React.ReactNode}) {
  return <div>{children}</div>;
}
export function AccordionItem({ value, children }:{value:string, children:React.ReactNode}) {
  return <div className="border-b">{children}</div>;
}
export function AccordionTrigger({ children }:{children:React.ReactNode}) {
  const [open, setOpen] = React.useState(false);
  return (
    <button onClick={()=>setOpen(o=>!o)} className="w-full text-left py-3 font-medium flex items-center justify-between">
      <span>{children}</span><span className="text-neutral-500">{/* chevron */}▾</span>
    </button>
  );
}
export function AccordionContent({ children }:{children:React.ReactNode}) {
  return <div className="pb-4 text-sm text-neutral-700">{children}</div>;
}
