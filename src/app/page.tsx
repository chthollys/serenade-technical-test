import Link from "next/link";

export default function RootPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-blue-700 flex items-center justify-center">
        <p className="text-green-600 text-lg font-semibold">AdainAcara.com</p>
      </div>
      <div className="flex-1 bg-green-600 flex items-center justify-center">
        <Link href={"/table"}>
          <button className="hover:cursor-pointer hover:border-2 hover:border-white p-6 bg-blue-600 rounded-xl text-green-600 text-lg">
            Klik disini
          </button>
        </Link>
      </div>
    </div>
  );
}
