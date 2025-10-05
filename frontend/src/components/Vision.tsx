import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Rocket, 
  Target, 
  Clock, 
  Handshake, 
  Heart, 
  Compass, 
  Briefcase 
} from "lucide-react";
import styles from "./Vision.module.css";

const visions = [
  {
    title: "Empower Lifelong Learning",
    desc: "We create an environment where curiosity drives knowledge and personal growth never ends.",
    icon: BookOpen,
  },
  {
    title: "Innovative Thinking",
    desc: "We inspire learners to embrace creativity and challenge the boundaries of possibility.",
    icon: Lightbulb,
  },
  {
    title: "Build Communities",
    desc: "We foster connections, collaboration, and shared learning experiences across diverse groups.",
    icon: Users,
  },
  {
    title: "Launch Future Leaders",
    desc: "We equip individuals with the knowledge, skills, and character to lead in every sphere.",
    icon: Rocket,
  },
  
  {
    title: "Discover Purpose",
    desc: "We help you uncover your God-given calling and align it with real-world impact.",
    icon: Compass,
  },
  {
    title: "Develop Godly Character",
    desc: "We instill biblical values that shape integrity, faith, and lasting influence.",
    icon: Heart,
  },
  // {
  //   title: "Master Productivity",
  //   desc: "We train youth to manage time and resources effectively for maximum output.",
  //   icon: Clock,
  // },
  // {
  //   title: "Conquer Obstacles",
  //   desc: "We provide tools and guidance to overcome fear, procrastination, and lack of direction.",
  //   icon: Target,
  // },
  // {
  //   title: "Mentorship for Growth",
  //   desc: "We connect youth with experienced mentors for accountability, wisdom, and encouragement.",
  //   icon: Handshake,
  // },
  // {
  //   title: "Thrive in the Marketplace",
  //   desc: "We equip young people with leadership and communication skills to succeed in career and business.",
  //   icon: Briefcase,
  // },
];


const Vision = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Vision</h2>
      <p className={styles.subtitle}>
        We exist to redefine learning and empower the next generation through knowledge, creativity, and purpose.
      </p>

      <div className={styles.visionGrid}>
        {visions.map(({ title, desc, icon: Icon }, i) => (
          <div
            className={`${styles.visionCard}`}
            style={{ animationDelay: `${i * 0.2}s` }}
            key={i}
          >
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} size={32} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
