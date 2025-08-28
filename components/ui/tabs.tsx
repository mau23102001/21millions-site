'use client';

import React, { createContext, useContext, useState, type ReactNode } from 'react';

type TabsContextType = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

export function Tabs({
  defaultValue,
  children,
  className = '',
}: {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`inline-flex rounded-xl border bg-neutral-50 p-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({
  children,
  value,
  className = '',
}: {
  children: ReactNode;
  value: string;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('TabsTrigger must be used within <Tabs>');

  const active = ctx.value === value;

  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={`px-4 py-2 rounded-lg text-sm transition ${
        active ? 'bg-white shadow font-medium text-neutral-800' : 'text-neutral-600 hover:text-neutral-800'
      } ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

export function TabsContent({
  children,
  value,
  className = '',
}: {
  children: ReactNode;
  value: string;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;
  if (ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}

export default Tabs;
