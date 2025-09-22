"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import styles from "./FAQ.module.css";
import Header from "@/components/Header";

const faqs = [
  {
    question: "What is Kingdom Impact Coaching Academy (KICA)?",
    answer: "KICA is a youth-focused initiative that equips young people with spiritual, leadership, and practical life skills to discover purpose and impact their world."
  },
  {
    question: "Who can join KICA?",
    answer: "KICA is open to youths, students, graduates, and young professionals who desire to grow spiritually, develop skills, and live purpose-driven lives."
  },
  {
    question: "How do I register for the program?",
    answer: "Simply click the 'Register Now' button on our website, complete the 5-step signup process, and you’ll receive confirmation via email." 
  },
  {
    question: "Is there a registration fee?",
    answer: "No , the program is entirely free." 
  },
  {
    question: "How long does the program last?",
    answer: "The program runs for 3 months , intensive work shop class ." 
  },
  {
    question: "What are the core courses offered at KICA?",
    answer: "Our courses include Spiritual Formation, Purpose Discovery, Productivity Mastery, Business & Finance, Leadership, Public Speaking, Relationship Intelligence, Digital Media, Generational Impact and more" 
  },
  {
    question: "Do I have to complete all the courses?",
    answer: "Each participant is encouraged to go through the full transformation pathway, but you may also engage specific modules that fit your journey."
  },
  {
    question: "What is the graduation requirement?",
    answer: "Graduation requires 75% attendance, completion of projects, mentorship engagement, and a final transformation testimony or impact project."
  },
  {
    question: "Will I get a certificate after completing the program?",
    answer: "Yes, successful participants are certified as Kingdom Impact Ambassadors, equipped to lead and influence in their spheres."
  },
  {
    question: "Can I join a mentorship track?",
    answer: "Yes, KICA pairs students with seasoned mentors in spirituality, business, career, and family for personalized growth."
  },
  {
    question: "What practical projects will I do?",
    answer: "You’ll work on projects such as daily devotional routines, business plans, productivity challenges, leadership simulations, and community impact initiatives."
  },
  {
    question: "Is the program strictly spiritual?",
    answer: "No, while rooted in faith, KICA integrates life skills, leadership, business, and digital relevance to prepare youths for holistic success."
  },
  {
    question: "Can I volunteer in church ministries through KICA?",
    answer: "Yes, KICA encourages involvement in ministries such as choir, media, ushering, evangelism, and outreach for practical service."
  },
  {
    question: "Is the program only for members of this church?",
    answer: "No, KICA is open to all youths regardless of denomination, as long as you’re willing to grow and serve with kingdom values."
  },
  {
    question: "What if I miss a session?",
    answer: "Recorded sessions and follow-up notes are usually provided, but you’re encouraged to maintain at least 75% attendance for graduation."
  },
  {
    question: "Can I invite a friend to join?",
    answer: "Absolutely! KICA encourages you to invite friends and peers who will benefit from spiritual growth and personal development."
  },
  {
    question: "Do you provide digital learning options?",
    answer: "Yes, KICA incorporates online mentorship, digital classes, and media resources so you can learn from anywhere."
  },
  {
    question: "What age group does KICA focus on?",
    answer: "KICA primarily serves youth and young adults, but anyone passionate about purpose and impact can join."
  },
  {
    question: "How does KICA help with personal struggles like procrastination or fear?",
    answer: "Through mindset coaching, productivity challenges, and mentorship, KICA provides tools to overcome limiting beliefs and build confidence."
  },
  {
    question: "How can I stay connected after the program?",
    answer: "Graduates join the KICA alumni network, with opportunities for ongoing mentorship, leadership roles, and community impact projects."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
    <section className={styles.faqSection}>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.title}
      >
        <HelpCircle size={28} className={styles.icon} /> Frequently Asked
        Questions
      </motion.h2>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={22} />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className={styles.faqAnswer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default FAQ;
