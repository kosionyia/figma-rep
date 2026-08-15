
import { Poppins } from "next/font/google";
import Hero from "@/component/landing/hero";
import Success from "@/component/landing/success";
import CloudSoftware from "@/component/landing/about_us/cloud_software";
import WhatIsTOTC from "@/component/landing/about_us/totc";
import WhatYouCanDo from "@/component/landing/about_us/can_do";


const PoppinsFont = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function Home() {
  return (
    <div
      className={`${PoppinsFont.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
    >
      <main className="flex2 w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <Success/>
        <CloudSoftware/>
        <WhatIsTOTC/>
        <WhatYouCanDo/>
      </main>
    </div>
  );
}
