export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Strona nie znaleziona</p>
        <a href="/" className="mt-8 inline-block bg-red-600 px-8 py-4 rounded-xl text-xl">
          Wróć do sklepu
        </a>
      </div>
    </div>
  );
}