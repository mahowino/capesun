import React from 'react';

const StarRating = () => (
    <>
        {Array(5).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </>
);

const TestimonialCard = ({ testimonial }:any) => (
    <div className="flex flex-col overflow-hidden shadow-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
            <div className="flex-1">
                <div className="flex items-center">
                    <StarRating />
                </div>
                <blockquote className="flex-1 mt-8">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">{testimonial.message}</p>
                </blockquote>
            </div>
            <div className="flex items-center mt-8">
                <div className="ml-4">
                    <p className="text-base font-bold text-gray-900 font-pj">{testimonial.name}</p>
                    <p className="mt-0.5 text-sm font-pj text-gray-600">{testimonial.role}</p>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            message: "This service is a game-changer! I got an accurate valuation instantly and sold my car at a fair price. The whole process was so smooth.",
            name: "James Opiyo",
            role: "Car Seller",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
        },
        {
            message: "I was skeptical at first, but the valuation was spot-on. They really know the market, and it saved me hours of research.",
            name: "Emma Mwavali",
            role: "Auto Enthusiast",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-1.png",
        },
        {
            message: "Incredibly fast and reliable! The valuation report helped me negotiate a much better deal with confidence. Highly recommended.",
            name: "Michael Musa",
            role: "Used Car Buyer",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
        },
        {
            message: "Great experience! The valuation was accurate, and the site is very user-friendly. I’ll definitely use them again.",
            name: "Olivia Kemboi",
            role: "First-Time Car Seller",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png",
        },
        {
            message: "This service saved me so much time! I knew exactly what my car was worth without going to multiple dealers.",
            name: "David Chege",
            role: "Frequent Seller",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
        },
        {
            message: "Absolutely fantastic! I was unsure about my car's value, but this service provided a precise estimate within minutes. It really helped me get a fair deal.",
            name: "Sophia Kibet",
            role: "Car Enthusiast",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-3.png",
        }
        
    ];

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg font-medium text-gray-600 font-pj">People have said how good Capesun is</p>
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
                </div>
              
                <div className="relative mt-10 grid max-w-lg gap-6 mx-auto md:max-w-none md:grid-cols-3 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
