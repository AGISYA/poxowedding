import Head from "next/head";
import Image from "next/image";

export default function Booking() {
  return (
    <div className="bg-white text-black flex flex-col items-center justify-center p-4">
      <Head>
        <title>Booking Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="text-center">
        <div className="flex items-center">
          <p className="text-2xl md:text-4xl font-light mx-24">
            Untuk mengamankan <span className="font-bold">tanggalmu</span>
            <br />
            siapkan uang cukup <span className="font-bold">100 ribu</span>
            <br />
            Booking ini berakhir
            <br />
            <span className="font-bold">sampai hari besok!</span>
          </p>
          <div className="mt-4">
            <Image
              src="/images/1.jpg"
              alt="Hands holding a 100,000 Indonesian Rupiah note"
              className="mx-auto"
              width="300"
              height="150"
            />
          </div>
        </div>

        <p className="mt-8 text-2xl md:text-4xl font-light">
          Buruan <span className="font-bold">Booking</span>
          <br />
          sekarang juga!
        </p>
        <a
          href="https://wa.me/+6285729236337" // Replace "your-number-here" with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-red-700 text-white text-2xl md:text-4xl font-bold py-4 px-8 rounded-full"
        >
          BOOK NOW!
        </a>
      </div>
    </div>
  );
}
