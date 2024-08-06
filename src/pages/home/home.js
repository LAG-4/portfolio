import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import myImage from "../../assets/profile.jpg";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("Web Developer");

  useEffect(() => {
    const texts = [
      "Web Developer",
      "Flutter Developer",
      "Video Editor",
      "Gamer",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="home">
      <div className="header">
        <img className="profileimg" src={myImage} alt="Profile" />
        <div className="text-container">
          <div className="titlesmall">Hello, I am</div>
          <div className="name">Aryan Gupta</div>
          <motion.div
            key={currentText}
            className="changing-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentText}
          </motion.div>
          <br />
          <div className="buttons-box">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Download CV
            </button>
            <button
              type="button"
              class="text-black hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Contact Info
            </button>
          </div>
          <div className="socialbuttons">
            <button type="button">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/doodle/48/linkedin--v2.png"
                alt="linkedin--v2"
              />
              <span class="sr-only">Icon description</span>
            </button>
            <button type="button" onClick={"/navbar"}>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/dusk/64/github.png"
                alt="github"
              />
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
