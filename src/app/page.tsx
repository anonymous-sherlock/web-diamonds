import { BannerVideo } from "@/components/banner-video";
import ClientsLogo from "@/components/clients";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <Hero />
        <BannerVideo />
      </main>
      <main className="min-h-screen">
        <ClientsLogo />
      </main>
      <main className="min-h-screen bg-slate-400"></main>
      <main className="min-h-screen bg-orange-300"></main>
    </>
  );
}
