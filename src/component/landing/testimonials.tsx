import Image from 'next/image';
// Importing specific icons from react-icons
import { BsArrowRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Testimonial = () => {
  return (
    <section className="bg-white min-h-screen w-full flex items-center justify-center font-sans overflow-hidden py-24 px-6 md:px-12 lg:px-32">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Column: Text Content & CTA */}
        <div className="flex-1 z-10 w-full">
          {/* Section Subtitle */}
          <div className="flex items-center gap-4 text-[#8A8A8A] uppercase tracking-[0.2em] text-sm mb-6">
            <div className="w-16 h-px bg-[#8A8A8A]"></div>
            <span>Testimonial</span>
          </div>

          {/* Section Title */}
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-[#4D49DA] tracking-wide">
            What They Say?
          </h2>
          
          {/* Description Paragraphs */}
          <div className="text-[#8A8A8A] text-lg space-y-6 leading-relaxed mb-12">
            <p>
              TOTC has got more than 100k positive ratings from our users around the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the Skilline.
            </p>
            <p>
              Are you too? Please give your assessment
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex items-center justify-between border border-[#00C49F] rounded-full pl-6 pr-2 py-2 text-[#00C49F] hover:bg-[#00C49F] hover:text-white transition-all duration-300 w-auto min-w-70">
            <span className="text-lg font-medium">Write your assessment</span>
            <div className="border border-[#00C49F] rounded-full p-3 ml-4 group-hover:border-white transition-colors">
              <BsArrowRight className="text-xl" />
            </div>
          </button>
        </div>

        {/* Right Column: Image & Floating Card */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
          
          {/* Image Container */}
          <div className="relative w-full max-w-105 aspect-4/5">
            <Image 
              src="/images/lady-book.png" 
              alt="Smiling woman holding folders" 
              fill
              priority
              className="object-cover rounded-[3rem] shadow-2xl"
            />

            {/* Floating Navigation Arrow */}
            <button className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl text-[#4D49DA] hover:bg-gray-50 transition-colors z-20 hidden md:block">
              <IoIosArrowForward size={28} />
            </button>
          </div>

          {/* Floating Testimonial Card */}
          <div className="absolute -bottom-16 lg:-bottom-12 lg:-right-32 bg-white rounded-2xl shadow-2xl w-[90%] sm:w-125 flex overflow-hidden z-30">
            {/* Left Coral Accent Bar */}
            <div className="w-3 shrink-0 bg-[#F47E68]"></div>
            
            {/* Card Content */}
            <div className="p-6 md:p-8 w-full flex flex-col justify-right bg-white ">
              <div className="border-l-2 border-[#E5E5E5] pl-6 mb-6">
                <p className="text-[#5F5F7E] text-base md:text-lg leading-relaxed font-medium">
                  &quot;Thank you so much for your help. It&apos;s exactly what I&apos;ve been looking for. You won&apos;t regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.&quot;
                </p>
              </div>
              
              <div className="flex items-end justify-between pl-6">
                <span className="font-bold text-[#5F5F7E] text-lg">Gloria Rose</span>
                
                <div className="flex flex-col items-end gap-1">
                  <div className="flex text-[#FFC107] text-lg gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-sm text-[#8A8A8A]">12 reviews at Yelp</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Testimonial;