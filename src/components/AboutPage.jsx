import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <section className="relative bg-white py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src="https://i.pinimg.com/736x/09/6b/53/096b53da91d3e807d53419aea798376d.jpg"
              alt="MANYA SHUKLA"
              loading="lazy"
              className="w-full max-w-md h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl border-4 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            About <span className="text-blue-600">Me</span>
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              I am a{" "}
              <span className="font-semibold text-blue-600">
                Computer Science Engineering
              </span>{" "}
              student with a strong passion for technology, innovation, and
              problem-solving. I enjoy turning ideas into real-world digital
              solutions and constantly push myself to learn, experiment, and
              grow in the ever-evolving tech landscape.
            </p>

            <p>
              My primary focus lies in{" "}
              <span className="font-semibold text-blue-600">
                Web Development
              </span>
              , where I build responsive, user-centric, and scalable
              applications using modern tools and frameworks. Alongside this, my
              interest in competitive programming strengthens my logical
              thinking and ability to solve complex problems efficiently.
            </p>

            <p>
              I strongly believe in the power of the{" "}
              <span className="font-semibold text-blue-600">
                open-source community
              </span>
              and collaborative learning. I am always eager to work on impactful
              projects, contribute to meaningful ideas, and create solutions
              that blend creativity, performance, and real-world usability.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <a
              href="https://drive.google.com/file/d/160zv-9lW0PVVmduFax2fBz5pAH7-Txut/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Download My CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
