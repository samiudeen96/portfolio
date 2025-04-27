import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="flex flex-col">
      {/* Map Section */}
      <motion.section
        className="mapbox"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31398.518481761374!2d79.36359410439539!3d10.356687768910618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afffe01f93954dd%3A0x45738afa24f38380!2sAdirampattinam%2C%20Tamil%20Nadu%20614701!5e0!3m2!1sen!2sin!4v1745723988928!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg shadow-md"
          ></iframe>
        </figure>
      </motion.section>

      {/* Form Section */}
      <motion.section
        className=""
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <form action="#" className="flex flex-col gap-5" data-form>
          <div className="flex flex-wrap sm:gap-10 gap-5">
            <input
              type="text"
              name="fullname"
              className="border-[2px] border-[#dbdbdb] p-[15px] flex-1 rounded-md"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="border-[2px] border-[#dbdbdb] p-[15px] flex-1 rounded-md"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            rows="5"
            className="border-[2px] border-[#dbdbdb] p-[15px] flex-1 rounded-md"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <div className="flex justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#915eff] w-fit text-white p-2 rounded-md cursor-pointer transition"
              type="submit"
              data-form-btn
            >
              <span>Send Message</span>
            </motion.button>
          </div>
        </form>
      </motion.section>
    </section>
  );
};

export default Contact;
