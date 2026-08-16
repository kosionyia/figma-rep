import Image from 'next/image';
import Link from 'next/link';

const ResourcesSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3B3887] mb-6 tracking-wide">
            Lastest News and Resources
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Featured Article */}
          <div className="flex flex-col">
            <Link href="/news/zoom-friendly-edtech" className="group block h-full">
              {/* Featured Image */}
              <div className="relative w-full aspect-16/10 sm:aspect-4/3 rounded-4xl overflow-hidden mb-8 shadow-xl">
                <Image 
                  src="/images/laptop-zoom.png" 
                  alt="Person using a laptop with Zoom" 
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Category Badge */}
              <div className="inline-block bg-[#41CCB5] text-white text-sm font-semibold px-6 py-2 rounded-full mb-6 uppercase tracking-wider">
                News
              </div>
              
              {/* Article Title */}
              <h3 className="text-2xl md:text-[1.75rem] font-bold text-black mb-4 leading-snug group-hover:text-[#41CCB5] transition-colors duration-300">
                Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
              </h3>
              
              {/* Article Excerpt */}
              <p className="text-[#8A8A8A] text-lg mb-8 leading-relaxed">
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              
              {/* Read More Link */}
              <span className="text-[#8A8A8A] underline group-hover:text-white transition-colors duration-300">
                Read more
              </span>
            </Link>
          </div>

          {/* Right Column - Article List */}
          <div className="flex flex-col justify-between gap-8 lg:gap-0 py-2">
            
            {/* List Item 1 */}
            <Link href="/news/series-a-financing" className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
              <div className="relative w-full sm:w-56 shrink-0 aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/Girlie.png" 
                  alt="Child studying on tablet" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-[#41CCB5] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  Press Release
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#41CCB5] transition-colors duration-300 leading-snug">
                  Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                </h4>
                <p className="text-[#8A8A8A] text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                  Class Technologies Inc., the company that created Class,...
                </p>
              </div>
            </Link>

            {/* List Item 2 */}
            <Link href="/news/zoom-investors" className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
              <div className="relative w-full sm:w-56 shrink-0 aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/laptop-dark.png" 
                  alt="User on a zoom call" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-[#41CCB5] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  News
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#41CCB5] transition-colors duration-300 leading-snug">
                  Zoom&apos;s earliest investors are betting millions on a better Zoom for schools
                </h4>
                <p className="text-[#8A8A8A] text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                  Zoom was never created to be a consumer product. Nonetheless, the...
                </p>
              </div>
            </Link>

            {/* List Item 3 */}
            <Link href="/news/former-blackboard-ceo" className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
              <div className="relative w-full sm:w-56 shrink-0 aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/cat.png" 
                  alt="Zoom meeting with a cat avatar" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-[#41CCB5] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  News
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#41CCB5] transition-colors duration-300 leading-snug">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
                </h4>
                <p className="text-[#8A8A8A] text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                  This year, investors have reaped big financial returns from betting on Zoom...
                </p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;