import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion

type Feature = {
  title: string;
  description: string;
  iconPath: React.ReactNode;
  iconWidth?: string;
  iconHeight?: string;
  iconViewBox?: string;
};

interface FeaturesSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  description,
  features,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {features.map((feature, index) => {
            // Using useInView from framer-motion inside the map for each feature
           

            return (
              <motion.div
                key={index}
                className={`md:p-8 lg:p-14 ${
                  index % 2 === 1 ? 'md:border-l md:border-gray-200' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.9,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // Delay for cascading animation
                  ease: 'easeOut',
                }}
                ref={ref} // Add ref to trigger visibility change
              >
                <motion.svg
                  className="mx-auto"
                  width={feature.iconWidth || '46'}
                  height={feature.iconHeight || '46'}
                  viewBox={feature.iconViewBox || '0 0 46 46'}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: index * 0.2,
                  }}
                >
                  {feature.iconPath}
                </motion.svg>
                <motion.h3
                  className="mt-12 text-xl font-bold text-gray-900 font-pj"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: index * 0.2,
                  }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="mt-5 text-base text-gray-600 font-pj"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: index * 0.3,
                  }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
