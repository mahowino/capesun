import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col relative py-20 lg:py-0">
      <section className="flex-grow flex items-center relative min-h-screen bg-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-3 gap-y-12 lg:gap-x-8 items-center">
            
            {/* Left Column (1/3 width) */}
            <motion.div
              className="lg:col-span-1 flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center lg:text-left">
                <motion.h1
                  className="text-4xl font-bold leading-tight text-secondary sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Discover the True Worth of Every Ride
                </motion.h1>
                <motion.p
                  className="mt-2 text-lg text-secondary sm:mt-8 font-inter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                  Unlock accurate valuations and insights to confidently know your vehicle`&apos;`s value in today`&apos;`s market.
                </motion.p>
              </div>

              <motion.div
                className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
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
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className="lg:absolute lg:top-[-80px] lg:scale-125 lg:right-10 flex justify-center items-start rounded-lg overflow-hidden">
                <img
                  className="max-w-full h-96 object-contain rounded-lg shadow-lg"
                  src="/assets/interior.jpg"
                  alt="Illustration"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
