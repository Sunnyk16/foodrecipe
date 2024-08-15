import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-gradient-to-tr from-blue-400 to-purple-200 h-screen ">
        
        <p className="text-center capitalize font-bold text-6xl ">
        welcome <span className="text-white">to </span>recipes
        </p>
        <div className="flex justify-center">
        <Link href={"/recipe-list"}>
          <button className="border border-emerald-500 capitalize p-2 m-2 rounded-md hover:translate-y-1 hover: bg-emerald-400 hover:text-white ">
            explore
          </button>
        </Link>
        </div>
      </div>
    </main>
  );
}
