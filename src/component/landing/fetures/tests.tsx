import Image from "next/image";
import { HiCheck, HiX, HiPaperAirplane } from "react-icons/hi";

const Assessments = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* ================= LEFT ILLUSTRATION ================= */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* Decorative blue circle */}
          <div className="absolute left-[8%] top-[3%] h-12 w-12 rounded-full bg-[#6175F4] sm:h-14 sm:w-14" />

          {/* Orange dot */}
          <div className="absolute left-[20%] top-[-2%] h-3 w-3 rounded-full bg-[#FF9A62]" />

          {/* Pink dot */}
          <div className="absolute right-[17%] top-[48%] h-2 w-2 rounded-full bg-[#EF5B9A]" />

          {/* Green dot */}
          <div className="absolute bottom-[5%] left-[13%] h-2.5 w-2.5 rounded-full bg-[#2FE6A6]" />

          {/* Main quiz card */}
          <div className="relative z-10 w-full max-w-[390px] rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-6">
            {/* Question badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#DCE5FF] px-5 py-2 text-xs text-[#7180A9]">
              Question 1
            </div>

            {/* Question */}
            <h3 className="max-w-[280px] text-lg font-semibold leading-7 text-[#30358A]">
              True or false? This play
              <br />
              takes place in Italy
            </h3>

            {/* Quiz image */}
            <div className="relative mt-5 aspect-[16/8] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/venice.png"
                alt="Venice, Italy"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 390px"
              />
            </div>

            {/* Success message */}
            <div className="absolute -bottom-5 right-[-20px] flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] sm:right-[-35px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9F8ED]">
                <HiPaperAirplane className="rotate-[-25deg] text-xl text-[#2BCF9B]" />
              </div>

              <p className="text-xs font-medium leading-5 text-[#2BCF9B]">
                Your answer was
                <br />
                sent successfully
              </p>
            </div>

            {/* X button */}
            <div
              className="absolute -right-1 -top-3
    sm:-right-3 sm:-top-6
    z-20 flex h-11 w-11 items-center justify-center rounded-full  bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#FF4772]">
                <HiX className="text-xl text-[#FF4772]" />
              </div>
            </div>

            {/* Check button */}
            <div
              className="absolute right-2 top-5
    sm:-right-12
    z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2BCF9B]">
                <HiCheck className="text-xl text-[#2BCF9B]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full lg:w-1/2">
          <h2 className="max-w-md text-2xl font-semibold leading-relaxed text-[#30358A] sm:text-3xl">
            Assessments,
            <br />
            <span className="text-[#00C7B7]">Quizzes,</span> Tests
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#68698B] sm:text-base sm:leading-8">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Assessments;
