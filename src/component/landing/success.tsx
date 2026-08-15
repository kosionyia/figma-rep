import React from 'react'

const Success = () => {
  const stats = [
    { value: "15K+", label: "Students" },
    { value: "75%", label: "Total success" },
    { value: "35", label: "Main questions" },
    { value: "26", label: "Chief experts" },
    { value: "16", label: "Years of experience" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Our Success
        </h2>

        <p className="mt-2 text-[18px] leading-4 text-gray-500">
          Ornare et fusce interdum porttitor nulla. Etiam sit amet,
          diam vitae sollicitudin ut nec metus et pharetra gravida.
          Adipiscing a quis tellus eu consequat tristique vel nisl.
        </p>
      </div>

      {/* Statistics */}
      <div className="mx-auto mt-10 grid w-full md:px-32 grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center"
          >
            <h3 className="text-6xl font-normal text-sky-500">
              {stat.value}
            </h3>

            <p className="mt-1 text-xl text-gray-700">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Success;