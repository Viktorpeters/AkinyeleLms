"use client";

import React from "react";
import { GraduationCap, Clock, CheckCircle, HelpCircle } from "lucide-react";
import styles from "./dashboard.module.css";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const Page = () => {

  //  const router = useRouter();

  // useEffect(() => {
   
  //   const user = localStorage.getItem("user");

  //   if (!user) {
     
  //     router.push("/signup");
  //   }
  // }, [router]);

  return (
    <div>
      {/* Welcome Section */}
      <div className={styles.welcomecont}>
        {/* <GraduationCap color="blue" size={40} /> */}
        {/* <h1>Welcome back, Ososanya mubarak</h1> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          ducimus odit eos aspernatur nisi!
        </p> */}
      </div>

      {/* Application Status Section */}
      <div className={styles.statusContainer}>
        <div className={styles.statusCard}>
          <div className={styles.statusHeader}>
            <Clock size={28} />
            <span>Registration Pending</span>
          </div>
          <h2>Almost There!</h2>
          <p>
            Thank you for registering with{" "}
            <b
              style={{
                background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              KINGDOM IMPACT AND COACHING ACADEMY (KICA)
            </b>
            . Your application is currently under review by our admissions team.
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <CheckCircle className={styles.iconBlue} size={22} />
              <div>
                <h4>Application Received</h4>
                <p>Your registration has been successfully submitted</p>
              </div>
            </div>

            <div className={styles.step}>
              <Clock className={styles.iconOrange} size={22} />
              <div>
                <h4>Under Review</h4>
                <p>Our team is currently processing your application</p>
              </div>
            </div>
          </div>

          <div className={styles.nextcont}>
            <h5>what happens next ?</h5>
            <ul>
              <li>
                Our admission team would review your application and statement
                of purpose.
              </li>
              <li>
                You would recieve an email notification once your registration
                is approved.
              </li>
              <li>
                Acess to your personalized learning dashboard would be granted
                immediately..
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.helpBox}>
            <HelpCircle size={22} />
            <h3>Need Help?</h3>
            <p>
              If you have questions about your application status or need
              assistance, our support team is here to help.
            </p>
            <a href="mailto:support@akinyelelms.edu">support@akinyelelms.edu</a>
            <div>
              <button>Contact Support</button>
            </div>
          </div>

          <div className={styles.timelineBox}>
            <h3>Application Timeline</h3>
            <ul>
              <li>
                <span className={styles.dotGreen}></span> Application Submitted
                – Today
              </li>
              <li>
                <span className={styles.dotOrange}></span> Under Review – 2-5
                business days
              </li>
              <li>
                <span className={styles.dotGray}></span> Decision Notification –
                Via email
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
