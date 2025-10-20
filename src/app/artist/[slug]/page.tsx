import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArtistBySlug, getAllArtists } from "@/data/artists";
import { notFound } from "next/navigation";
import ArtistAnimations from "@/components/ArtistAnimations";

interface ArtistPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const artists = getAllArtists();
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <ArtistAnimations />
      <Navigation />

      {/* Main content with top padding for fixed nav */}
      <main className="pt-24">
        {/* Artist Hero Section - Miguel Bosé Style */}
        <section className="md:px-8 px-4">
          <div className="artist-hero max-w-8xl mx-auto bg-primary h-[640px] rounded-[48px] relative overflow-hidden">
            <Image
              src={artist.desktopImage}
              alt={`${artist.name} Background`}
              className="w-full h-full object-cover relative! z-0 md:block hidden"
              fill
            />
            <Image
              src={artist.mobileImage}
              alt={`${artist.name} Background`}
              className="w-full h-full object-cover relative! z-0 md:hidden block sm:object-center object-bottom"
              fill
            />
            <div className="artist-hero-text absolute md:bottom-0 bottom-0 left-0 max-w-xl bg-black rounded-tr-4xl sm:p-8 p-4 px-4">
              <h2 className="lg:text-7xl md:text-6xl text-4xl font-roboto-black text-white heading-letterspacing-lg">
                {artist.name}
              </h2>
              <p className="text-white text-lg leading-relaxed font-roboto-regular">
                {artist.introText}
              </p>
              {/* Round elements */}
              <div className="absolute -bottom-[5px] -right-[61px] z-20 w-16 h-16 md:block hidden">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover"
                  fill
                />
              </div>
              <div className="absolute -top-[58px] -left-[3px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Artist Section */}
        <section className="md:px-8 px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div className="artist-about-image order-2 md:order-1 bg-primary md:h-[600px] h-[320px] rounded-4xl overflow-hidden">
                <Image
                  src="/images/about-us.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover relative!"
                  fill
                />
              </div>
              <div className="artist-about-text order-1 md:order-2">
                <div className="text-xl text-white md:mb-4 mb-0 font-roboto">
                  {artist.aboutHeading}
                </div>
                <h2 className="lg:text-7xl md:text-6xl text-5xl font-roboto-black text-white mb-6 heading-letterspacing-lg">
                  {artist.name}
                </h2>
                <p className="text-white text-lg leading-relaxed font-roboto-regular">
                  {artist.aboutText}
                </p>
                <Link
                  href="/#contact"
                  className="bg-transparent border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-colors backdrop-blur-sm font-roboto-black uppercase tracking-wider mt-6 inline-block"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
