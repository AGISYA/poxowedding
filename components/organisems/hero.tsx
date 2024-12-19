import Image from "next/image";

export default function Hero() {
  return (
    <main className="bg-wedding-light text-wedding-dark">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src="/images/1.jpg" // Ganti dengan path gambar di folder public
          alt="Hero Image"
          layout="fill" // Memastikan gambar memenuhi seluruh area
          objectFit="cover" // Menjaga rasio gambar
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col  justify-center text-white bg-black bg-opacity-50">
          {/* Logo */}
          <div className="mb-6 mt-10">
            <Image
              src="/images/2.jpg"
              alt="Logo Wedding"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Teks di Atas Gambar */}
          <h1 className="text-5xl mt-52 mx-5 md:text-4xl font-bold mb-4 drop-shadow-lg">
            Foxo Vendor Terbau Di Acara Wedding-mu
          </h1>
          <p className="text-lg mx-5 md:text-1xl drop-shadow-lg">
            kami hadir untuk memastikan kisah cinta kalian terekam Sempurna
          </p>
        </div>
      </section>
    </main>
  );
}
