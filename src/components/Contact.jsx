import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

import { EarthCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const serviceNewID = "service_kl12x05";
  const templateNewID = "template_y2smsnj";
  const publicNewKey = "UWwIOZQ29TzZ45gtq";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const ConfirmationModal = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(serviceNewID);
    emailjs
      .send(
        serviceNewID,
        templateNewID,
        {
          from_name: form.name,
          to_name: "Imran",
          from_email: form.email,
          to_email: "imran.khan.yrt@gmail.com",
          message: form.message,
        },
        publicNewKey
      )
      .then(
        (response) => {
          console.log(response);
          setLoading(false);
          alert(
            `Thank you ${form.name}. I will get back to you as soon as possible.`
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden shadow-sm shadow-[#A9A6C3] rounded-xl`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              onChange={handleChange}
              value={form.message}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-[#A9A6C3] shadow-sm rounded-xl"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
