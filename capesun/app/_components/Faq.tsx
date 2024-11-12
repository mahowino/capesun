"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
  open: boolean;
};

const Faq: React.FC = () => {
  const [faq, setFaq] = useState<FaqItem[]>([
    {
      question: 'Insurance Companies',
      answer: 'Offering essential services that streamline claims processing, conduct accurate vehicle valuations, and provide comprehensive risk assessments to assist insurance companies in efficient decision-making.',
      open: true,
    },
    {
      question: 'Auto Dealerships',
      answer: 'Supporting dealerships by providing market valuations for vehicles, which help facilitate sales and ensure dealerships have precise, up-to-date vehicle appraisals.',
      open: false,
    },
    {
      question: 'Private Vehicle Owners',
      answer: 'Providing consulting and advisory services to companies managing multiple vehicles, ensuring smooth fleet operations and optimal insurance coverage for cost-effective management.',
      open: false,
    },
    {
      question: 'Legal Firms',
      answer: 'Assisting legal professionals with expert testimony and vehicle evaluations in court cases, delivering precise assessments that support litigation and dispute resolution processes.',
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  return (
    <section className="py-10 bg-primary sm:py-16 lg:py-24">
      <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-2xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
            Our clients include
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-primary border border-primary cursor-pointer hover:bg-accent"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold text-white">
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    item.open ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {item.open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-5 sm:px-6 sm:pb-6 text-white overflow-hidden"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
