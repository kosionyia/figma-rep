
import { Poppins } from "next/font/google";
import Hero from "@/component/landing/hero";
import Success from "@/component/landing/success";
import CloudSoftware from "@/component/landing/about_us/cloud_software";
import WhatIsTOTC from "@/component/landing/about_us/totc";
import WhatYouCanDo from "@/component/landing/about_us/can_do";
import Features from "@/component/landing/fetures/features";
import TeachersLearners from "@/component/landing/fetures/tools";
import Assessments from "@/component/landing/fetures/tests";
import ClassManagement from "@/component/landing/fetures/class-manage";
import Discussion from "@/component/landing/fetures/one_discussion";
import Testimonial from "@/component/landing/testimonials";
import ResourcesSection from "@/component/landing/resources";


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
        <Features/>
        <TeachersLearners/>
        <Assessments/>
        <ClassManagement/>
        <Discussion/>
        <Testimonial/>
        <ResourcesSection/>
      </main>
    </div>
  );
}
