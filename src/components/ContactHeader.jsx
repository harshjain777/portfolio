import React from 'react';
import { motion } from 'framer-motion';

function ContactHeader({ toggle, handleToggle }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="text-4xl font-thin uppercase mb-10">Contact</h2>
      <form
        className={`w-full max-w-lg p-8 shadow-lg rounded-lg ${
          toggle ? 'shadow-yellow-500' : 'shadow-zinc-500'
        }`}
        onSubmit={(e) => {
          e.preventDefault();
          handleToggle();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow text-black appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
            aria-label="Subject"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-10">
        <p className="text-sm">
          Or contact me directly at:
          <a href="mailto:jainharsh9555@gmail.com" className="text-blue-500">
            {' '}
            jainharsh9555@gmail.com
          </a>
        </p>
        <p className="text-sm mt-2">
          Follow me on:
          <a
            href="https://www.linkedin.com/in/harshjain-767192271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-2"
          >
            LinkedIn
          </a>
          ,
          <a
            href="https://github.com/Nanashi752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-2"
          >
            GitHub
          </a>
          ,
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-2"
          >
            Twitter
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default ContactHeader;
