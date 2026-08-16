import Image from "next/image";
import { HiOutlineViewGrid, HiOutlineCalendar } from "react-icons/hi";

const TeachersLearners = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2">
          <h2 className="max-w-md text-2xl font-semibold leading-relaxed text-[#30358A] sm:text-3xl">
            <span className="text-[#00C7B7]">
              Tools
            </span>{" "}
            For Teachers
            <br />
            And Learners
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#68698B] sm:text-base sm:leading-8">
            Class has a dynamic set of teaching tools built to be deployed
            and used during class. Teachers can handout assignments in
            real-time for students to complete and submit.
          </p>
        </div>

        {/* ================= RIGHT ILLUSTRATION ================= */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          {/* Decorative red circle */}
          <div className="absolute right-[25%] top-[12%] h-32 w-32 rounded-full bg-[#FF5C68] sm:h-40 sm:w-40" />

          {/* Decorative dots */}
          <div className="absolute right-[12%] top-[8%] h-3 w-3 rounded-full bg-[#45E6A8]" />

          <div className="absolute right-[4%] top-[30%] h-2 w-2 rounded-full bg-[#DCE4F4]" />
          <div className="absolute right-[10%] top-[48%] h-2 w-2 rounded-full bg-[#DCE4F4]" />

          <div className="absolute left-[20%] top-[35%] h-2 w-2 rounded-full bg-[#DCE4F4]" />
          <div className="absolute left-[17%] top-[52%] h-2 w-2 rounded-full bg-[#DCE4F4]" />

          {/* Purple dot */}
          <div className="absolute bottom-[8%] right-[8%] h-3 w-3 rounded-full bg-[#8174F5]" />

          {/* Orange dot */}
          <div className="absolute bottom-[25%] left-[15%] h-3 w-3 rounded-full bg-[#FF9270]" />

          {/* Student image */}
          <div className="relative z-10 h-[360px] w-[320px] sm:h-[400px] sm:w-[360px]">
            <Image
              src="/images/student.png"
              alt="Student using TOTC"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 320px, 360px"
            />
          </div>

          {/* Top-left feature icon */}
          <div className="absolute left-[15%] top-[12%] z-20 flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-xl bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
            <HiOutlineViewGrid className="text-2xl text-[#5665F2]" />
          </div>

          {/* Right feature icon */}
          <div className="absolute right-[8%] top-[30%] z-20 flex h-14 w-14 rotate-[5deg] items-center justify-center rounded-xl bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
            <HiOutlineCalendar className="text-2xl text-[#5665F2]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersLearners;