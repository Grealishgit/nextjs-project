import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2025/11/13/17/30/common-nettle-9955222_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-8xl font-semibold">NextJS 16</h2>
    </div>
  );
}
