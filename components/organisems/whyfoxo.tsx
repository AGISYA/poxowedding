// components/WhyFoxo.js
import React from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md"; // Import React Icons

const WhyFoxo = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Kenapa harus foxo?
        </h1>
        <p className="text-sm sm:text-lg mb-6 text-gray-600">
          Cek <em>tabel</em> berikut biar kamu lebih yakin pilih foxo.
        </p>
        <div className="overflow-x-auto text-black bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto border-collapse text-sm sm:text-base">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border-b px-4 sm:px-6 py-2 sm:py-4 text-left">
                  Keunggulan
                </th>
                <th className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  Fotografer Lain
                </th>
                <th className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  foxo wedding
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 transition-colors text-center">
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-left">
                  Tim berpengalaman.
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4  ">
                  <MdCheckCircle className="text-green-500 " />
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 text-center " />
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4  text-left">
                  Softfile dikirim di hari yang sama.
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCancel className="text-red-500" />
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 " />
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4  text-left">
                  Backup file di Kamera, Laptop, Hardisk dan Drive. Kami jamin
                  file kalian aman.
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCancel className="text-red-500" />
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 " />
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4  text-left">
                  Cetak magazine 7 hari selesai.
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCancel className="text-red-500" />
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 " />
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4  text-left">
                  Bebas request konsep sesuasnya.
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 " />
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 " />
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4  text-left">
                  Prewed, wedding dan Photobooth (All in 1).
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCancel className="text-red-500" />
                </td>
                <td className="border-b px-4 sm:px-6 py-2 sm:py-4 text-center">
                  <MdCheckCircle className="text-green-500 " />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhyFoxo;
