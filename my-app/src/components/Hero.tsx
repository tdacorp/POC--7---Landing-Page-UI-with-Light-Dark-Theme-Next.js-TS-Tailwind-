// HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-160">
      {/* Background Image */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        className="object-cover fixed -z-10 "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 p-0">
          Best food for <br/> your taste
        </h1>
        <p className="text-white mb-6 max-w-xl">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-white text-white rounded hover:bg-red-700 hover:text-white transition">
            Book A Table
          </button>
          <button className="px-6 py-2 border border-white text-white rounded hover:bg-red-700 hover:text-white transition">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}
