// HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] lg:h-[100vh]">
      {/* Background Image */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        className="object-cover fixed -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
          Best food for <br /> your taste
        </h1>
        <p className="text-white mb-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-6 py-2 border rounded-full border-white text-white hover:bg-red-700 hover:text-white transition">
            Book A Table
          </button>
          <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-red-700 hover:text-white transition">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}
