import Image from "next/image";
import Link from "next/link";
// import img1 from "../../public/newsstand.gif";

export default function Home() {
  return (
    <main>
      <div className="text-center capitalize font-bold text-5xl bg-[url('https://storyset.com/illustration/witch/bro')]  h-screen bg-cover">
        {/* <img src={'https://img.freepik.com/free-photo/top-view-bowls-with-indian-food_23-2148723454.jpg?w=996&t=st=1723723046~exp=1723723646~hmac=250b5d42abb300566313c1c8cd351b77854facdae4b4d6c5edc39aa1f6e97a6b'} alt="newsstand" className=" " /> */}
        welcome to recipes
        <div>
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
