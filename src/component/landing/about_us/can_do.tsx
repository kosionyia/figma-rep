import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const WhatYouCanDo = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <div className="relative">
            {/* Decorative circle */}
            <span className="absolute -left-5 -top-3 h-12 w-12 rounded-full bg-[#2FE6A6] sm:-left-4" />

            <h2 className="relative max-w-xl text-2xl font-semibold leading-[1.7] text-[#30358A] sm:text-3xl">
              Everything you can do in a physical classroom,
              <span className="text-[#00C7B7]">
                {" "}
                you can do with TOTC
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#68698B] sm:text-base sm:leading-8">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>

          {/* Learn More */}
          <a
            href="#"
            className="mt-7 inline-block text-sm text-[#68698B] underline underline-offset-2 transition hover:text-[#30358A]"
          >
            Learn more
          </a>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full lg:w-1/2">
          {/* Blue decorative shape */}
          <div className="absolute -left-3 -top-3 h-20 w-24 rounded-tl-2xl rounded-br-2xl bg-[#28B9E8] sm:-left-4 sm:-top-4" />

          {/* Green decorative shape */}
          <div className="absolute -bottom-4 -right-3 h-32 w-36 rounded-br-2xl rounded-tl-2xl bg-[#2FE6A6] sm:-bottom-4 sm:-right-4" />

          {/* Image */}
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/lecture.png"
              alt="Students in a classroom"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Play button */}
            <button
              type="button"
              aria-label="Play classroom video"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
            >
              <FaPlay className="ml-1 text-sm text-[#28B9E8]" />
            </button>
          </div>

          {/* Small green circle */}
          <span className="absolute -left-22 top-1/2 z-0 h-5 w-5 -translate-y-1/2 rounded-full bg-[#2FE6A6]" />
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo;