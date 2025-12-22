import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      id: 1,
      que: "How can I contact you?",
      ans: "You can reach me through the contact form on this website or via email at work.sainivijay@gmail.com, sainivijay2601@gmail.com and vijayk39_soe@jnu.ac.in",
    },
    {
      id: 2,
      que: "Can I hire you for a project?",
      ans: "Yes, I'm available for freelance work and collaborations. Please get in touch with me to discuss your project requirements.",
    },
    {
      id: 3,
      que: "Are you available for remote work?",
      ans: "Yes, I can work remotely and collaborate with clients from anywhere in the world.",
    },
    {
  id: 4,
  que: "What technologies do you work with?",
  ans: "I work with the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, Tailwind CSS, REST APIs, and also have experience with C++, Python, and MySQL.",
},
{
  id: 5,
  que: "Can you build complete full-stack applications?",
  ans: "Yes, I design and develop end-to-end web applications with responsive frontends and secure, scalable backends.",
},
  ];

  return (
    <div className="bg-white px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 md:py-1 lg:py-10">
      <h2 className="font-bold text-black text-2xl md:text-5xl text-center">
        FAQ
      </h2>
      <p className="text-center text-textBlackColor pt-2 text-sm sm:text-base">
        Explore my portfolio, learn about my skills, and get answers to
        frequently asked questions about my work, collaborations, and more
      </p>

      <div className="mt-16 space-y-4">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className="border-[1px] border-black rounded-xl"
          >
            <h2>
              <button
                className={`w-full text-left px-4 py-4 text-lg sm:text-xl text-textBlackColor font-semibold ${
                  activeIndex === index ? "rounded-t-lg" : "rounded-lg"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.que}
              </button>
            </h2>
            {activeIndex === index && (
              <div className="px-4 py-4 text-base sm:text-lg text-textBlackColor">
                {" "}
                • {item.ans}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;