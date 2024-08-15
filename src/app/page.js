import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="">
        
        <p className="text-center capitalize font-bold text-5xl ">
        welcome to recipes
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
