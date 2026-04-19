import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
        alt="Fashion hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Dress the Moment
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Discover timeless pieces crafted for the modern wardrobe. Luxury fashion that speaks to your style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products?category=tops"
            className="bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors"
          >
            Shop Women
          </Link>
          <Link
            href="/products?category=bottoms"
            className="border border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Shop Men
          </Link>
        </div>
      </div>
    </section>
  )
}