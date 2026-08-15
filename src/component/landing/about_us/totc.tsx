import Image from "next/image";

const WhatIsTOTC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* Heading + Description */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#2f3585] sm:text-4xl">
          What is <span className="text-[#00c7b7]">TOTC?</span>
        </h2>

        <p className="mt-6 text-sm leading-7 text-[#68698b] sm:text-base sm:leading-8">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>

      {/* Instructor + Student Cards */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {/* Instructor */}
        <div className="group relative h-[280px] overflow-hidden rounded-2xl sm:h-[320px]">
          <Image
            src="/images/lady-smiling.png"
            alt="Instructor teaching a class"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              FOR INSTRUCTORS
            </h3>

            <button
              type="button"
              className="mt-5 rounded-full border border-white px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#2f3585] sm:px-8 sm:text-base"
            >
              Start a class today
            </button>
          </div>
        </div>

        {/* Students */}
        <div className="group relative h-[280px] overflow-hidden rounded-2xl sm:h-[320px]">
          <Image
            src="/images/dev.png"
            alt="Students learning together"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              FOR STUDENTS
            </h3>

            <button
              type="button"
              className="mt-5 rounded-full bg-[#28add9] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#209cc5] sm:px-8 sm:text-base"
            >
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTOTC;