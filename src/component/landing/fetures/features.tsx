import Image from "next/image";
import {
  HiOutlineViewGrid,
  HiOutlinePresentationChartBar,
  HiOutlineUserGroup,
} from "react-icons/hi";
const Features = () => {
  const featurePoints = [
    {
      icon: HiOutlineViewGrid,
      text: (
        <>
          Teachers don’t get lost in the grid view
          <br className="hidden sm:block" />
          and have a dedicated Podium space.
        </>
      ),
    },
    {
      icon: HiOutlinePresentationChartBar,
      text: (
        <>
          TA’s and presenters can be moved to
          <br className="hidden sm:block" />
          the front of the class.
        </>
      ),
    },
    {
      icon: HiOutlineUserGroup,
      text: (
        <>
          Teachers can easily see all students
          <br className="hidden sm:block" />
          and class data at one time.
        </>
      ),
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* ================= SECTION HEADER ================= */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[#30358A] sm:text-3xl">
          Our{" "}
          <span className="text-[#00C7B7]">
            Features
          </span>
        </h2>

        <p className="mt-4 text-sm text-[#68698B] sm:text-base">
          This very extraordinary feature, can make learning activities
          more efficient
        </p>
      </div>

      {/* ================= FEATURE CONTENT ================= */}
      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* ================= LEFT ILLUSTRATION ================= */}
        <div className="relative w-full max-w-[550px] lg:w-1/2">
          {/* Decorative circles */}
          <span className="absolute left-[8%] top-[-8%] z-0 h-16 w-16 rounded-full bg-[#2FE6A6] sm:h-20 sm:w-20" />

          <span className="absolute left-[24%] top-[-4%] z-0 h-4 w-4 rounded-full bg-[#28C7E8]" />

          <span className="absolute bottom-[-3%] right-[18%] z-0 h-4 w-4 rounded-full bg-[#F45B69]" />

          {/* Main illustration */}
          <div className="relative z-10 mx-auto w-full">
            <Image
              src="/images/call.png"
              alt="Virtual classroom interface"
              width={550}
              height={400}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full lg:w-1/2">
          {/* Feature heading */}
          <h3 className="max-w-md text-2xl font-semibold leading-relaxed text-[#30358A] sm:text-3xl">
            A{" "}
            <span className="text-[#00C7B7]">
              user interface
            </span>{" "}
            designed
            <br className="hidden sm:block" />
            for the classroom
          </h3>

          {/* Feature points */}
          <div className="mt-8 space-y-6">
            {featurePoints.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5"
                >
                  {/* Icon circle */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
                    <Icon className="text-xl text-[#30358A]" />
                  </div>

                  {/* Text */}
                  <p className="text-sm leading-6 text-[#68698B] sm:text-base">
                    {feature.text}
                  </p>
                </div> 
              );
            })}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Features;