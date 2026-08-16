import Image from "next/image";

const ClassManagement = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold leading-relaxed sm:text-3xl">
            <span className="text-[#00C7B7]">
              Class Management
            </span>
            <br />
            <span className="text-[#30358A]">
              Tools for Educators
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#68698B] sm:text-base sm:leading-8">
            Class provides tools to help run and manage the class such as
            Class Roster, Attendance, and more. With the Gradebook, teachers
            can review and grade tests and quizzes in real-time.
          </p>
        </div>

        {/* ================= RIGHT ILLUSTRATION ================= */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative w-full max-w-[550px]">
            <Image
              src="/images/grade.png"
              alt="Class management gradebook"
              width={550}
              height={400}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassManagement;