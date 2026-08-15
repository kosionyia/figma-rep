import {
  FaFileInvoiceDollar,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaFileInvoiceDollar,
    title: (
      <>
        Online Billing,
        <br />
        Invoicing, & Contracts
      </>
    ),
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    iconBg: "bg-indigo-500",
  },
  {
    icon: FaCalendarAlt,
    title: (
      <>
        Easy Scheduling &
        <br />
        Attendance Tracking
      </>
    ),
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    iconBg: "bg-teal-500",
  },
  {
    icon: FaUsers,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
    iconBg: "bg-sky-500",
  },
];

const CloudSoftware = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight text-[#2f3585] sm:text-3xl">
          All-In-One{" "}
          <span className="text-[#00c7b7]">
            Cloud Software.
          </span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-[#68698b] sm:text-base">
          TOTC is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-28 grid max-w-6xl grid-cols-1 gap-20 sm:mt-32 sm:gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="relative rounded-2xl bg-white px-8 pb-9 pt-24 text-center shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:px-10"
            >
              {/* Icon */}
              <div
                className={`absolute left-1/2 top-0 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${feature.iconBg} shadow-lg`}
              >
                <Icon className="text-3xl text-white" />
              </div>

              {/* Card title */}
              <h3 className="min-h-[60px] text-xl font-semibold leading-8 text-[#30358a]">
                {feature.title}
              </h3>

              {/* Card description */}
              <p className="mt-5 text-sm leading-7 text-[#68698b]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CloudSoftware;