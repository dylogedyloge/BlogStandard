import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import HeroImage from "../public/hero.jpg";
import { Logo } from "../components/Logo";

export default function Home() {
  const { user } = useUser();
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image
        src={HeroImage}
        alt="hero"
        className="absolute object-cover w-full h-full"
      />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm">
        <Logo />
        <p className="mb-10">
          Supercharge your essay writing with our SEO-friendly Essay Gerentor AI
          app! Create captivating content that ranks higher in search results
          and grabs the attention of your target audience. Say hello to
          optimized essays that make a lasting impact.
        </p>
        <Link href="/post/new" className="btn">
          Start
        </Link>
      </div>
    </div>
  );
}
