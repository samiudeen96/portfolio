import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Swal from 'sweetalert2'

const Contact = () => {
  const { ref: mapRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ ...form, access_key: "11b00ff0-2be1-4b01-aa68-eec2e53862ea" })
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      console.log("Success", res);
      setForm({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <section className="flex flex-col">
      {/* Lazy-loaded Map Section */}
      <motion.section
        ref={mapRef}
        className="mapbox rounded-md p-2 bg-[#dbdbdb]"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {inView && (
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31398.518481761374!2d79.36359410439539!3d10.356687768910618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afffe01f93954dd%3A0x45738afa24f38380!2sAdirampattinam%2C%20Tamil%20Nadu%20614701!5e0!3m2!1sen!2sin!4v1745723988928!5m2!1sen!2sin"
              width="600"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-md shadow-md"
            ></iframe>
          </figure>
        )}
      </motion.section>

      {/* Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <form ref={formRef}
          onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex flex-wrap sm:gap-10 gap-5">
            {/* <input
              type="text"
              name="fullname"
              className="border-[2px] border-[#dbdbdb] focus:outline-none focus:ring-0 p-[11px] flex-1 rounded-md"
              placeholder="Full name"
              required
              data-form-input
            /> */}
            <label className="flex flex-col flex-1">
              <span className="font-medium mb-1">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="p-[12px] rounded-md border-[2px] border-[#dbdbdb] focus:outline-none focus:ring-0 font-medium"
                required
              />
            </label>

            {/* <input
              type="email"
              name="email"
              className="border-[2px] border-[#dbdbdb] focus:outline-none focus:ring-0 p-[12px] flex-1 rounded-md"
              placeholder="Email address"
              required
              data-form-input
            /> */}
            {/* email */}
            <label className="flex flex-col flex-1">
              <span className=" font-medium mb-1">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="p-[12px] rounded-md border-[2px] border-[#dbdbdb] focus:outline-none focus:ring-0 font-medium"
                required
              />
            </label>
          </div>

          {/* <textarea
            name="message"
            rows="5"
            className="border-[2px] border-[#dbdbdb] focus:outline-none focus:ring-0 p-[12px] flex-1 rounded-md"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea> */}

          {/* message */}
          <label className="flex flex-col flex-1">
            <span className="font-medium mb-1">Your Message</span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="p-[12px] rounded-md border-[2px] border-[#dbdbdb] focus:outline-none focus:ring-0 font-medium"
              required
            />
          </label>

          <div className="flex justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#915eff] w-fit text-white py-2 px-4 rounded-md cursor-pointer transition"
              type="submit"
              data-form-btn
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </motion.button>
          </div>
        </form>
      </motion.section>
    </section>
  );
};

export default Contact;
