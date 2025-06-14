import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation variant
const fadeIn = (direction: string = "up", delay: number = 0.1) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 20 : -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

// Dynamically import all images from the certificates folder
const imageModules = import.meta.glob("../../assets/images/certificates/*.png", {
  eager: true,
});



// Certificate image names
const imageNames = ["c1", "c2", "c3", "c4","c5","c6", "w1", "w2", "w3"];

const certificateData = imageNames.map((name, index) => {
  const matchedPath = Object.keys(imageModules).find((path) =>
    path.includes(`${name}.png`)
  );
  return {
    id: index + 1,
    src: matchedPath
      ? (imageModules[matchedPath] as { default: string }).default
      : "",
    type: name.startsWith("c") ? "course" : "workshop",
  };
});

const Certificates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCertificates =
    activeCategory === "all"
      ? certificateData
      : certificateData.filter((item) => item.type === activeCategory);

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded ${
              activeCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("course")}
            className={`px-4 py-2 rounded ${
              activeCategory === "course"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Course
          </button>
          <button
            onClick={() => setActiveCategory("workshop")}
            className={`px-4 py-2 rounded ${
              activeCategory === "workshop"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Workshop
          </button>
        </div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {filteredCertificates.map((cert) => (
            <div key={cert.id} className="bg-secondary p-2 rounded-lg shadow-lg">
              <img
                src={cert.src}
                alt={`Certificate ${cert.id}`}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
