"use client"

import CustomNavbar from "./_components/CustomNavbar";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import WhoAreWeContent from "./_components/AboutUs";
import TwoToOneLayout from "./_layout/TwoToOneLayout";
import ValuesSection from "./_components/ValuesSection";
import Testimonials from "./_components/Testimonials";
import ProductPromo from "./_components/ProductPromo";
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
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Talk to sales', href: '#contact' },
];

const featuresData = [
  {
    title: "Vehicle Accident Assessment",
    description: "Detailed post-accident assessments to determine the extent of damage, repair costs, and the cause of the accident. Assists insurance companies with comprehensive, impartial reports for claim processing.",
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
    title: "Underwriting Support",
    description: "Pre-underwriting valuations to support insurance underwriting decisions. Market risk analysis for informed decision-making. Custom risk management solutions tailored to specific client needs.",
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
    title: "Risk Assessment",
    description: "Property risk assessment to evaluate risks for insurance or business planning. Business interruption risk evaluation to assess potential financial losses. Liability and casualty risk review to identify business risks.",
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
    title: "Motor Vehicle Valuation",
    description: "Independent valuations for cars, motorcycles, trucks, and commercial vehicles for insurance, resale, or purchase. Reports based on current market conditions and specific vehicle features.",
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
    title: "Property Appraisal",
    description: "Comprehensive damage assessments for property. Support for claims negotiation to ensure fair settlements. Post-loss valuations for insurance claims.",
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
    title: "Asset Valuation",
    description: "Motor vehicle valuations for insurance or bank purposes. Motor loss assessment for damage and loss claims.",
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
    <div className=" bg-secondary text-black">
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


<div id="testimonials" >

      <Testimonials/>
      </div>

      <div id="contact" >

      <ContactForm/>
      </div>

      <div id="product" >

      <ProductPromo/>
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
