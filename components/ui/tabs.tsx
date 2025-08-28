'use client';

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type TabValue = 'personas' | 'empresas' | string;

type TabsUncontrolledProps = {
  defaultValue: TabValue;
  children: ReactNode;
  className?: string;
  value?: never;
  onValueChange?: never;
};

type TabsControlledProps = {
  value: TabValue;
  onValueChange: (v: TabValue) => void;
  children: ReactNode;
  className?: string;
  defaultValue?: never;
};

type TabsProps = TabsUncontrolledProps | TabsControlledProps;

type TabsContextType = {
  value: TabValue;
  setValue: (v: TabValue) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

export function Tabs(props: TabsProps) {
  const isControlled = 'value' in props && typeof props.onValueChange === 'function';

  const [inner, setInner] = useState<TabValue>(
    !isControlled ? props.defaultValue : (props.value as TabValue)
  );

  const value = isControlled ? (props as TabsControlledProps).value : inner;
  const setValue = (v: TabValue) => {
    if (isControlled) {
      (props as TabsControlledProps).onValueChange(v);
    } else {
      setInner(v);
    }
  };

  const ctx = useMemo(() => ({ value, setValue }), [value]);

  return (
    <TabsContext.Provider value={ctx}>
      <div className={props.className}>{props.children}</div>
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
      className={`inline-flex rounded-xl border bg-neutral-50 p-1 relative z-20 ${className}`}
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
  value: TabValue;
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
      aria-controls={`tab-panel-${value}`}
      onClick={() => ctx.setValue(value)}
      className={`px-4 py-2 rounded-lg text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
        active
          ? 'bg-white shadow font-medium text-neutral-800'
          : 'text-neutral-600 hover:text-neutral-800'
      } ${className}`}
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
  value: TabValue;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;
  if (ctx.value !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`tab-panel-${value}`}
      className={`relative z-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default Tabs;
