// Minimal test page - Server Component (no animations, no heavy dependencies)
export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Blu2 - Test Deployment
        </h1>
        <p className="text-white text-xl">
          ✅ Server Component Working
        </p>
        <p className="text-white text-sm mt-4">
          If you see this, the timeout issue is fixed!
        </p>
      </div>
    </div>
  );
}

