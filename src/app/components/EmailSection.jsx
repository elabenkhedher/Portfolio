"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/elabenkhedher" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ela-ben-khedher-949a26239/" },
  { label: "CV (PDF)", href: "/cv-ela-ben-khedher.pdf", download: true },
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
        const errorMsg =
          typeof resData.error === "object"
            ? resData.error.message || JSON.stringify(resData.error)
            : resData.error;
        alert(`Erreur lors de l'envoi du message : ${errorMsg || "Erreur inconnue"}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Échec de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSending(false);
    }
  };

  const fieldClasses =
    "w-full border-b border-line bg-transparent py-3 text-sm text-paper placeholder:text-paper-faint focus:outline-none focus:border-blush focus:ring-0 transition-colors";

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
          <h2 className="text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Contact{" "}
            <span className="text-blush" aria-hidden="true">
              ♡
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-medium leading-snug tracking-tight text-paper sm:text-3xl">
              Vous avez un projet en tête ? Une opportunité de stage PFE ?
            </h3>
            <p className="mt-5 max-w-md leading-relaxed text-paper-dim">
              À la recherche d&apos;un stage de fin d&apos;études (PFE) dès février 2027 ou ouverte à des collaborations techniques.
              Contactez-moi directement par email ou par téléphone, je vous réponds avec plaisir sous 24 à 48 heures.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:elabenkedher@gmail.com"
                className="inline-flex min-h-[44px] items-center text-lg text-paper transition-colors hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                ✉️ elabenkedher@gmail.com
              </a>
              <a
                href="tel:+21696079666"
                className="inline-flex min-h-[44px] items-center text-base text-paper-dim transition-colors hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                📞 +216 96 079 666
              </a>
              <p className="font-mono text-xs text-paper-faint">
                📍 Nabeul & Kélibia, Tunisie
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.download ? "CV_Ela_Ben_Khedher.pdf" : undefined}
                  className="inline-flex min-h-[44px] items-center font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
                >
                  {social.label} <span aria-hidden="true" className="ml-1">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {emailSubmitted ? (
              <div className="rounded-xl border border-line bg-ink-raised p-8">
                <p className="font-medium text-paper">Message envoyé ✨</p>
                <p className="mt-2 text-sm text-paper-dim">
                  Merci pour votre message ! Je vous répondrai dans les plus brefs délais. À très vite !
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper-faint"
                  >
                    Votre adresse email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="nom@exemple.com"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper-faint"
                  >
                    Objet du message
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    placeholder="Opportunité de stage PFE, échange technique..."
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
                    placeholder="Détails du projet, opportunité de stage PFE, équipe, etc."
                    className={`${fieldClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex min-h-[44px] self-start items-center rounded-lg bg-blush px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-soft hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-blush disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Envoi en cours..." : "Envoyer le message ♡"}
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
