import Image from "next/image";
import heroImage from "@/public/images/logo.png";
import AnimatedFadeInUp from "../animationFadeUp/AnimationFadeUp";


export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center text-white px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover sm:object-cover object-[center_top]" // Mobile จะเลื่อนไปโชว์ด้านบนของภาพ
          priority
        />
      </div>

      <div className="container mx-auto relative z-10 py-20 sm:py-0">
        <AnimatedFadeInUp>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              Solunar.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal">
              🌙 - Between Light, Sea & Serenity.
            </p>
          </div>
        </AnimatedFadeInUp>
      </div>
    </section>
  );
}
