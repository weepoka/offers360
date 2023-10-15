import React, { useState } from "react";
import { Datepicker, Input, initTE } from "tw-elements";

// Initialize the TE (Tw Elements) components
initTE({ Datepicker, Input }, { allowReinits: true });

const FAQ = () => {
  // Create a state variable to manage the active accordion item
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle the active accordion item
  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  // Define the FAQ items as an array of objects
  const faqItems = [
    {
      question:
        "What job opportunities are available at Amazon, and in which departments and locations do they typically hire?",
      answer:
        "This question seeks to provide more information about the job opportunities offered by Amazon and the diversity of positions and locations where they often recruit.",
    },
    {
      question:
        "What are the common types of corporate job roles available at Amazon's headquarters in Seattle and its satellite offices worldwide?",
      answer:
        "This question aims to inquire about the various corporate job positions Amazon offers at its headquarters and other global offices, including details on the types of roles and departments involved.",
    },
    {
      question:
        "What technology-focused job opportunities are offered by Amazon, and who are the ideal candidates for these roles",
      answer:
        "This question seeks information about the technology and development positions at Amazon and the specific skillsets and expertise the company looks for in professionals involved in product and service innovation.",
    },
  ];

  return (
    <div className="container md:my-24 my-10 mx-auto md:px-6 xl:px-24">
      <section className="md:mb-32 mb-5">
        <h2 className="mb-6 pl-6 text-3xl font-bold">
          Frequently asked questions
        </h2>

        <div id="accordionFlushExample">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 ${
                index === activeAccordion ? "!border-b-0" : ""
              }`}
            >
              <h2 className="mb-0" id={`flush-heading${index}`}>
                <button
                  className={`group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none ${
                    index === activeAccordion
                      ? "[&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      : ""
                  }`}
                  type="button"
                  data-te-collapse-init
                  data-te-target={`#flush-collapse${index}`}
                  aria-expanded={index === activeAccordion}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className={`${
                  index === activeAccordion ? "!visible" : "hidden"
                } border-0`}
                data-te-collapse-item
                aria-labelledby={`flush-heading${index}`}
                data-te-parent="#accordionFlushExample"
              >
                <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
