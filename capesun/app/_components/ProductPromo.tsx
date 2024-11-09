import React from 'react';

const ProductPromo = () => {
  return (
    <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16 ">
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0">
          <a href="#">
            <img
              className="mb-4 h-4 w-56  sm:h-96 sm:w-96 md:h-full md:w-full md:block hidden"
              src="/assets/city.jpg"
              alt="peripherals"
            />
          
          </a>
        </div>
        <div className="me-auto place-self-center lg:col-span-7">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            The best place to value your car <br />
            and get best value for money
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Reserve an appointment with us today and enjoy exclusive savings with qualified activation. We cannot wait to hear from you.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-primary-700  py-3 text-center text-base font-medium text-accent hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductPromo;
