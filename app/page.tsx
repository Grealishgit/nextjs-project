import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2025/10/02/15/52/mountains-9868748_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-8xl text-yellow-400 font-semibold">Tasker Web App</h2>
      <p className="mt-4 font-semibold text-5xl">Coming Soon!</p>

      <div className="mt-8 flex items-center gap-2">
        <p className="text-2xl font-semibold">Developer:</p>
        <a className="text-2xl font-semibold underline text-yellow-600" href="https://github.com/Grealishgit" >Hunter</a>

      </div>
    </div>
  );
}
