// app/not-found.tsx
export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Página no encontrada</h1>
        <p className="text-neutral-600">La ruta solicitada no existe.</p>
        <a href="/" className="inline-block mt-4 text-sm underline">
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
