import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_877ihj7",
        "template_k8dkb7o",
        e.target,
        "XhJh22x_DQX5JV1bP"
      )
      .then(
        () => {
          setIsLoading(false);
          setStatusMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsLoading(false);
          setStatusMessage("❌ Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 max-w-7xl mx-auto bg-gray-900 text-white">
      <motion.h2
        className="text-5xl text-center font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let&apos;s Connect
      </motion.h2>
      <p className="text-center text-gray-400 text-lg mb-8">
        I&apos;d love to hear from you! Let&apos;s build something amazing together.
      </p>

      <div className="flex flex-col md:flex-row gap-12 p-6 mt-4">
        <div className="w-11/12 md:w-1/2 mx-auto flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <span className="text-purple-400 text-2xl">Email:</span>
            <span className="text-gray-300 text-lg">sabbirhossainsemanto</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <span className="text-purple-400 text-2xl">Phone:</span>
            <span className="text-gray-300 text-lg">+8801997119871</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <span className="text-purple-400 text-2xl">WhatsApp:</span>
            <span className="text-gray-300 text-lg">+8801997119871</span>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.form
            className="max-w-md mx-auto bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={sendEmail}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Send Me a Message</h3>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1 text-left">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-1 text-left">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-1 text-left">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-80"
              whileHover={{ scale: 1.05 }}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>

            {statusMessage && <p className="mt-4 text-gray-400">{statusMessage}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;