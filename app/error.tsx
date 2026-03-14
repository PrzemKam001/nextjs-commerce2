'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Coś poszło nie tak...</h2>
      <p className="mb-4 text-red-600">
        {error.message || 'Server error (check console / Vercel logs)'}
      </p>
      {error.digest && <p className="text-sm text-gray-500">Digest: {error.digest}</p>}
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}