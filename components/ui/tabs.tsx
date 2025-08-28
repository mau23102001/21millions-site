'use client';

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
} from 'react';

type TabsContextType = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

type TabsProps = {
  /** pestaña inicial */
  defaultValue: string;
  /** modo controlado opcional */
  value?: string;
  onValueChange?: (v: string) => void;
  children: ReactNode;
  className?: string;
};

export function Tabs({
  defaultValue,
  value: valueProp,
  onValueChange,
  children,
  className = '',
}: TabsProps) {
  const [internal, setInternal] = useState(defaultValue);
  const value = valueProp ?? internal;
  const setValue = (v: string) => {
    if (valueProp === undefined) setInternal(v);
    onValueChange?.(v);
  };

  const ctx = useMemo(() => ({ value, setValue }), [value]);

  return (
    <TabsContext.Provider value={ctx}>
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
    <div
      role="tablist"
      className={`grid grid-cols-2 max-w-md rounded-xl border bg-neutral-50 p-1 ${className}`}
      /* ayuda en mobile a evitar capas transparentes “comiéndose” el tap */
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
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
      type="button"
      role="tab"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      onClick={() => ctx.setValue(value)}
      className={`w-full select-none rounded-lg px-4 py-2 text-sm transition
        ${active ? 'bg-white shadow font-medium text-neutral-800' : 'text-neutral-600 hover:text-neutral-800'}
        ${className}`}
      /* asegura que el botón reciba el toque en iOS/Android */
      style={{ touchAction: 'manipulation' }}
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
  const active = ctx.value === value;

  return (
    <div
      role="tabpanel"
      hidden={!active}
      className={className}
    >
      {active ? children : null}
    </div>
  );
}

export default Tabs;
