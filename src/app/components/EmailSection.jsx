"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/elabenkhedher" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ela-ben-khedher-949a26239/" },
];

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      if (response.ok && !resData.error) {
        setEmailSubmitted(true);
      } else {
        const errorMsg = typeof resData.error === "object" ? (resData.error.message || JSON.stringify(resData.error)) : resData.error;
        alert(`Error sending message: ${errorMsg || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const fieldClasses =
    "w-full border-b border-line bg-transparent py-3 text-sm text-paper placeholder:text-paper-faint focus:outline-none focus:border-paper transition-colors";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-line py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-xs text-blush">03</span>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Contact{" "}
            <span className="text-blush" aria-hidden="true">
              ♡
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Have a project in mind? Or just want to say hi?
            </h3>
            <p className="mt-5 max-w-md leading-relaxed text-paper-dim">
              The form on the right goes straight to my inbox. If you prefer
              email, write to me directly and I will get back to you, usually
              within a day or two.
            </p>
            <a
              href="mailto:elabenkedher@gmail.com"
              className="mt-6 inline-block border-b border-line-strong pb-1 text-lg text-paper transition-colors hover:border-blush hover:text-blush"
            >
              elabenkedher@gmail.com
            </a>
            <div className="mt-10 flex gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-paper"
                >
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {emailSubmitted ? (
              <div className="border border-line p-8">
                <p className="font-medium">Message sent ✨</p>
                <p className="mt-2 text-sm text-paper-dim">
                  Thanks for reaching out, I will reply as soon as I can. Talk
                  soon!
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper-faint"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper-faint"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    placeholder="What is this about"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper-faint"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="A few lines about the project, timeline, anything useful"
                    className={`${fieldClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="self-start bg-blush px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-soft hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send message ♡"}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
