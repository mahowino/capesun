"use client"

import CustomNavbar from "./_components/CustomNavbar";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import WhoAreWeContent from "./_components/AboutUs";
import TwoToOneLayout from "./_layout/TwoToOneLayout";
import ValuesSection from "./_components/ValuesSection";

import Faq from "./_components/Faq";
import ContactForm from "./_components/ContactUs";
import Footer from "./_components/Footer";
import AdditionalImageCard from "./_components/AdditionalImageCard";
import styles from './home.module.css';
import { Link } from "react-scroll";


const companyLinks = [
  { title: 'About Us', href: '#who-are-we' },
  { title: 'Our clients', href: '#clients' },
  { title: 'Our Services', href: '#services' },
];

const helpLinks = [
  { title: 'Talk to sales', href: '#contact' },
];

const featuresData = [
  {
    index:0,
    title: "Vehicle Accident Assessment",
    description: "Detailed post-accident assessments to determine the extent of damage, repair costs, and the cause of the accident.",
    iconPath: (
      <path
        d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
        stroke="#F16638"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    index:1,

    title: "Underwriting Support",
    description: "Pre-underwriting valuations to support insurance underwriting decisions. ",
    iconPath: (
      <path
        d="M27 27H19V45H27V27Z"
        stroke="#F16638"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    index:2,

    title: "Risk Assessment",
    description: "Property risk assessment to evaluate risks for insurance or business planning. ",
    iconPath: (
      <path
        d="M23 23L30 30L23 37L16 30L23 23Z"
        stroke="#F16638"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    index:3,

    title: "Motor Vehicle Valuation",
    description: "Independent valuations for cars, motorcycles, trucks, and commercial vehicles for insurance, resale, or purchase. ",
    iconPath: (
      <path
        d="M12 35H36M15 35L20 20H30L35 35"
        stroke="#F16638"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    index:4,

    title: "Property Appraisal",
    description: "Comprehensive damage assessments for property. ",
    iconPath: (
      <path
        d="M10 40L40 10L30 30L10 40Z"
        stroke="#F16638"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    index:5,
    title: "Asset Valuation",
    description: "Motor vehicle valuations for insurance or bank purposes. ",
    iconPath: (
      <path
        d="M20 20H30V30H20V20Z M15 15H35V35H15V15Z"
        stroke="#F16638"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-secondary text-black">
            <CustomNavbar />
            <div id="hero-section">

      <HeroSection/>
      </div>

      <div id="who-are-we"  className="p-10">
        <TwoToOneLayout
          mainContent={<WhoAreWeContent />}
          sidebarContent={<ValuesSection />}
        />
      </div>

      <div id="clients"  className="bg-primary">
        <TwoToOneLayout
          mainContent={<Faq/>}
          sidebarContent={<AdditionalImageCard imageSrc={"/assets/car.jpg"} />}
        />
      </div>

      <div id="services" >

      <FeaturesSection
  title="Our Services and Solutions"
  description="Explore our range of expert services designed to meet your needs with precision, quality, and reliability."
  features={featuresData}
/>
</div>
<div id="contact" >

<ContactForm/>
</div>





      <Footer logoSrc={"/assets/logo_1.jpg"} logoAlt={"capesun"} description={""} socialLinks={[]} companyLinks={companyLinks} helpLinks={helpLinks}/>
    
      <div >
        <Link to="hero-section" smooth={true} duration={500} className={styles.scrollToTop}>
          Back to Top
        </Link>
      </div>
    </div>
  );
}

/*

<div id="testimonials" >

      <Testimonials/>
      </div>

     

      <div id="product" >

      <ProductPromo/>
      </div>
        { title: 'Testimonials', href: '#testimonials' },

      */
