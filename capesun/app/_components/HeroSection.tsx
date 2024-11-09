import React from 'react';

const HeroSection = () => {
  return (
    <div className=" min-h-screen flex flex-col relative py-20 lg:py-0">

      <section className="flex-grow flex items-center relative min-h-screen bg-primary">

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-3 gap-y-12 lg:gap-x-8 items-center">
            {/* Left Column (1/3 width) */}
            <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
              <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-secondary sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
    Discover the True Worth of Every Ride
</h1>
<p className="mt-2 text-lg text-secondary sm:mt-8 font-inter">
    Unlock accurate valuations and insights to confidently know your vehicles value in todays market.
</p>

              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-accent sm:text-4xl font-pj">2943</p>
                  <p className="ml-3 text-sm text-accent font-pj">
                    Cars
                    <br />
                    Valued
                  </p>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-white"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-accent sm:text-4xl font-pj">KES1M+</p>
                  <p className="ml-3 text-sm text-accent font-pj">
                    Client
                    <br />
                    Projects
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative">
  {/* Image */}
  <div className="lg:absolute lg:top-[-80px] scale-125 right-10 flex justify-center items-start rounded-lg overflow-hidden">
    <img
      className="max-w-full h-96 object-contain rounded-lg shadow-lg"
      src="/assets/interior.jpg"
      alt="Illustration"
    />
  </div>
</div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
