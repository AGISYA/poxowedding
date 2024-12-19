import Head from "next/head";

export default function WeddingPackage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Wedding Package</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="container mx-auto p-4">
        {/* Section Header dengan label FREE dan All In */}
        <div className="text-center relative">
          {/* Label FREE */}
          <div className="absolute top-[75px] left-[500px] flex items-center ">
            <div className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full shadow-lg rotate-[-10deg] ">
              FREE!!!
            </div>
          </div>

          {/* Label All In */}
          <div className="absolute top-[75px] right-96 left-[900px] flex items-center">
            <div className="bg-red-500 text-white font-bold px-4 py-1 rounded-full shadow-lg rotate-[10deg]">
              All In !!!
            </div>
          </div>

          {/* Judul dan Paket */}
          <h1 className="text-5xl font-bold">Wedding Rp6.000.000</h1>
          <div className="flex justify-center items-center space-x-4 mt-16">
            <div className="border-2 border-black rounded-full px-4 py-1 relative">
              <span className="text-red-500 text-xl font-bold">Prewedding</span>
            </div>
            <span className="text-2xl font-bold">+</span>
            <div className="border-2 border-black rounded-full px-4 py-1">
              <span className="text-red-500 text-xl font-bold">Photobooth</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-blue-500 text-white font-bold px-4 py-1 rounded-full shadow-lg inline-block">
              Khusus Bulan Ini!
            </div>
          </div>
        </div>

        {/* Section Paket Wedding, Prewedding, dan Photobooth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {/* Paket Wedding */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Wedding</h2>
            <ul className="list-disc list-inside">
              <li>8 Hours Session</li>
              <li>2 Photographer</li>
              <li>1 Videographer</li>
              <li>250+ Edited Photo</li>
              <li>3-5 Min. Wedding Video</li>
              <li>1 min. Wedding Short Video for Socmed</li>
              <li>1 Album Magazine + 1 Box Package</li>
              <li>All Photo on Google Drive & Flashdisk</li>
            </ul>
          </div>

          {/* Paket Prewedding */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Prewedding</h2>
            <ul className="list-disc list-inside">
              <li>4 Hours Session</li>
              <li>1 Photographer</li>
              <li>100+ Edited Photo</li>
              <li>1 Location for 2 outfit</li>
              <li>All Photo on Google Drive</li>
              <li>Special Include</li>
              <li>(Concept & Mood Board)</li>
            </ul>
          </div>

          {/* Paket Photobooth */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Photobooth</h2>
            <ul className="list-disc list-inside">
              <li>Free design twibbon sesuai tema yang diinginkan</li>
              <li>Free semua softfile (file foto & GIF)</li>
              <li>Semua file di-upload di hari yang sama</li>
              <li>Cetak ukuran 4R langsung jadi</li>
              <li>Harga hanya untuk wilayah Bandung & Garut</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
