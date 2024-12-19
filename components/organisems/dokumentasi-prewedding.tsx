import Head from "next/head";
import Image from "next/image";

export default function DokumentasiPrewedding() {
  return (
    <div className="bg-white w-full min-h-screen overflow-hidden">
      <Head>
        <title>Wedding Documentation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-cream text-black min-h-screen flex flex-col">
        <div className="container mx-auto p-4 flex flex-col justify-between min-h-full">
          {/* Header */}

          {/* Content Section */}
          <div className="flex flex-col mx-44 md:flex-row items-center justify-between flex-grow gap-6 mb-8">
            <div className="flex flex-col items-center text-center md:text-left md:items-center px-4 md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-black">
                Dokumentasi Prewedding?
              </h2>
              <p className="text-pink-500 font-semibold text-lg md:text-2xl mb-2">
                BISA
                <span className="text-sm md:text-lg text-gray-600 font-semibold mb-4">
                  Asal ada calon nya ya guys!
                </span>
              </p>

              <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-black mt-5">
                Bonus!
              </h3>
              <p className="text-sm md:text-lg text-gray-600 font-semibold">
                Bikin video pernikahan kayak trailer film!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <video
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Image
                alt="Wedding scene with balloons in the sky"
                className="w-96 h-60 md:h-48 object-cover rounded-lg mx-10 "
                src="/images/wedding1.png"
                width={1000}
                height={1000}
              />
              <Image
                alt="Wedding procession in a decorated hallway"
                className="w-96 h-60 md:h-48 object-cover rounded-lg mx-10 "
                src="/images/wedding2.png"
                width={1000}
                height={1000}
              />
              <Image
                alt="Bride standing in a beautifully lit room"
                className="w-96 h-60 md:h-48 object-cover rounded-lg mx-10 "
                src="/images/wedding3.png"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
