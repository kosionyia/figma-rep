import Image from "next/image";

const Discussion = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative w-full max-w-[550px]">
            <Image
              src="/images/discuss.png"
              alt="One-on-One Discussions"
              width={550}
              height={400}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>


        {/* ================= RIGHT ILLUSTRATION ================= */}

          <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold leading-relaxed sm:text-3xl">
            
            <span className="text-[#30358A]">
              One-on-One
            </span>

                        <br />

<span className="text-[#00C7B7]">
              Discussions
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#68698B] sm:text-base sm:leading-8">
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
          </p>
        </div>

<br />

       

      </div>

       <div className="flex justify-center mt-2">
            <button className="rounded-full  px-6 py-3 text-[#00C7B7] border border-[#00C7B7] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              See more Features
            </button>
        </div>

    </section>
  );
};

export default Discussion;