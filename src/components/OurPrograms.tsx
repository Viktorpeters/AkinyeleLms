// import React from "react";
// import styles from "./OurPrograms.module.css";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Button3 from "./Button3";
// import Link from "next/link";

// const courses = [
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731619/468bfeba-1b03-4e89-871b-35ab332edcdf.png",
//     course: "Spiritual Formation & Kingdom Identity",
//     coursedesc:
//       "Discover who you are in Christ and live from a place of unshakable identity.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731216/b81ac3e9-4025-4ffe-b299-98245d219e8d.png",
//     course: "Purpose Discovery & Life Mastery",
//     coursedesc:
//       "Uncover your purpose and align your life with clarity, passion, and impact.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758725631/51c1a0ac-6632-4853-80c1-767bc2dfba90.png",
//     course: "Mindshift & Productivity Mastery",
//     coursedesc:
//       "Shift your mindset, maximize your time, and produce results that matter.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731317/9a31046a-8b94-4431-a060-92d2786f93fc.png",
//     course: "Business, Career & Financial Intelligence",
//     coursedesc:
//       "Grow in wisdom to build wealth, advance your career, and steward resources well.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758725875/970d1b2d-e87a-4257-8c9e-ae4d6ee88a20.png",
//     course: "Leadership & Capacity Building",
//     coursedesc:
//       "Lead with vision, courage, and influence that transforms lives and systems.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731407/0e226ade-1e1b-48ad-95b2-b9353322c28c.png",
//     course: "Public Speaking & Influence",
//     coursedesc:
//       "Master the art of communication and inspire people with confidence and clarity.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731530/0befd9ed-adac-4221-8ee9-572e6dfea2eb.png",
//     course: "Marriage & Relationship Intelligence",
//     coursedesc:
//       "Build love, respect, and understanding for thriving, lasting relationships.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758726146/1107cc66-bf32-48a0-abbc-099658fa86e8.png",
//     course: "Special Capacity-Building Labs",
//     coursedesc:
//       "Practical sessions designed to stretch your skills and unlock hidden potential.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758726208/3f92da3a-d9ff-4fa7-bcf8-fab08a1530ec.png",
//     course: "Digital Influence & Media Mastery",
//     coursedesc:
//       "Leverage digital platforms to share your voice and lead with online authority.",
//     cta: "Learn More",
//   },
//   {
//     img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758726411/833b9b04-1cc7-4b86-bd83-47059f4c3f6d.png",
//     course: "Generational Impact Modules",
//     coursedesc:
//       "Prepare today to leave a lasting legacy for generations to come.",
//     cta: "Learn More",
//   },
// ];

// const OurPrograms = () => {
//   return (
//     <div>
//       <div className={styles.programstexts}>
//         <h1>Our Programs</h1>
//         <p>
//           We ensure that Africans interested in exploring various occupations
//           can readily access the resources they need to learn and grow
//         </p>
//       </div>
//       <div className={styles.programs}>
//         {courses.map((item, index) => (
//           <div className={styles.program} key={index}>
//             <div className={styles.imagebox}>
//               <Image
//                 src={item.img}
//                 alt={item.course}
//                 fill
//                 className={styles.image}
//                 priority
//               />
//             </div>

//             <h3>{item.course}</h3>
//             <p>{item.coursedesc}</p>
//             <Link href={`/Courses/${index}`}>
//               <Button3 />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurPrograms;

import React from "react";
import styles from "./OurPrograms.module.css";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731619/468bfeba-1b03-4e89-871b-35ab332edcdf.png",
    course: "Spiritual Formation & Kingdom Identity",
    teacher: "Tunde James",
    description:
      "Discover who you are in Christ and live from a place of unshakable identity.",
    cta: "View Programs",
  },
  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731216/b81ac3e9-4025-4ffe-b299-98245d219e8d.png",
    course: "Purpose Discovery & Life Mastery",
    teacher: "Tunde James",
    description:
      "Uncover your purpose and align your life with clarity, passion, and impact.",
    cta: "View Programs",
  },
  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758725631/51c1a0ac-6632-4853-80c1-767bc2dfba90.png",
    course: "Mindshift & Productivity Mastery",
    teacher: "Tunde James",
    description:
      "Shift your mindset, maximize your time, and produce results that matter.",
    cta: "View Programs",
  },
  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731317/9a31046a-8b94-4431-a060-92d2786f93fc.png",
    course: "Business, Career & Financial Intelligence",
    teacher: "Tunde James",
    description:
      "Transform your mindset, use your time wisely, and achieve meaningful results.",
    cta: "View Programs",
  },

  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758725875/970d1b2d-e87a-4257-8c9e-ae4d6ee88a20.png",
    course: "Leadership & Capacity Building",
    teacher: "Tunde James",
    description:
      "Grow as a servant leader, sharpen your strategic thinking, build effective teams, and create sustainable systems while mentoring the next generation of Kingdom leaders.",
    cta: "View Programs",
  },

  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731407/0e226ade-1e1b-48ad-95b2-b9353322c28c.png",
    course: "Public Speaking & Influence",
    teacher: "Tunde James",
    description:
      "Develop your leadership skills, inspire teams, make strategic decisions, and build sustainable structures for lasting impact.",
    cta: "View Programs",
  },

  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758731530/0befd9ed-adac-4221-8ee9-572e6dfea2eb.png",
    course: "Marriage & Relationship Intelligence",
    description:
      "Build strong, purpose-driven relationships, master communication and conflict management, and create a thriving family life.",
    cta: "View Programs",
  },

  {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758726146/1107cc66-bf32-48a0-abbc-099658fa86e8.png",
    course: "Special Capacity-Building Labs",
    teacher: "Tunde James",
    description:
      "Enhance your capacity through hands-on labs in innovation, writing, evangelism, mentoring, problem-solving, and structured execution.",
    cta: "View Programs",
  },

     {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758726208/3f92da3a-d9ff-4fa7-bcf8-fab08a1530ec.png",
    course: "Digital Influence & Media Mastery",
    description:
      "Harness the power of social media, create impactful content, and leverage digital tools—including AI—to build influence, innovate, and stay focused in the digital age.",
    cta: "View programs",
  },

    {
    img: "https://res.cloudinary.com/ddlnqthao/image/upload/v1758726411/833b9b04-1cc7-4b86-bd83-47059f4c3f6d.png",
    course: "Generational Impact Modules",
    description:
      "Become a solution provider through volunteerism, social impact, and transformation—raising Kingdom influencers to shape governance, business, culture, and global missions.",
    cta: "View Programs",
  },
];

const OurPrograms = () => {
  return (
    <div>
      <div className={styles.programstexts}>
        <h1>Schools that train you for the world’s most demanded skills</h1>
        <p>
          Whether you're starting from scratch or switching careers, there's a
          path here for you to succeed in today's global digital economy. Check
          out wide range of schools
        </p>
      </div>

      <div className={styles.programs}>
        {courses.map((item, index) => (
          <div className={styles.program} key={index}>
            <div className={styles.imagebox}>
              <Image
                src={item.img}
                alt={item.course}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.programContent}>
              <div className={styles.topRow}>
                <h3>{item.course}</h3>
                <span className={styles.topRated}>Top Rated</span>
              </div>
              <p className={styles.teacher}>{item.teacher}</p>
              <h5>About Course</h5>
              <p className={styles.description}>{item.description}</p>
              <Link href={`/Courses/${index}`}>
                <button className={styles.cta}>{item.cta}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
