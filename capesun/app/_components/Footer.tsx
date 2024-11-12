"use client"
import React from 'react';

// Define the types for the props
interface SocialLink {
    title: string;
    href: string;
    svg: {
        viewBox: string;
        path: string[];
    };
}

interface FooterProps {
    logoSrc: string;
    logoAlt: string;
    description: string;
    socialLinks: SocialLink[];
    companyLinks: { title: string; href: string }[];
    helpLinks: { title: string; href: string }[];
}

// The Footer component
const Footer: React.FC<FooterProps> = ({ 
    logoSrc, 
    logoAlt, 
    description, 
    socialLinks, 
    companyLinks, 
    helpLinks 
}) => {
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            className="w-auto h-9"
                            src={logoSrc}
                            alt={logoAlt}
                        />
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            {description}
                        </p>
                        <ul className="flex items-center space-x-3 mt-9">
                            {socialLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        title={link.title}
                                        className="flex items-center justify-center text-black transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-accent focus:bg-accent"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox={link.svg.viewBox}
                                            fill="currentColor"
                                        >
                                            {link.svg.path.map((path, index) => (
                                                <path key={index} d={path} />
                                            ))}
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        className="flex text-base text-black transition-all duration-200 hover:text-accent "
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Others</p>
                        <ul className="mt-6 space-y-4">
                            {helpLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        title={link.title}
                                        className="flex text-base text-black transition-all duration-200 hover:text-accent"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by Mahallon Owino</p>
            </div>
        </section>
    );
};

export default Footer;
