// app/not-found.tsx
export const dynamic = 'force-dynamic';   // ← to wyłącza statyczne prerenderowanie tej strony

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Strona nie znaleziona</p>
      <a href="/" className="mt-8 text-blue-600 hover:underline">Wróć do strony głównej</a>
    </div>
  );
}