"use client";
import Header from "@/components/Header";
import { useParams, useRouter } from "next/navigation";
import PurposeDiscovery from "@/components/Course/PurposeDiscovery";

import { useState } from "react";
import {
  BookOpen,
  Target,
  Brain,
  Briefcase,
  Users,
  Mic,
  Heart,
  FlaskConical,
  Monitor,
  Globe,
  ChevronRight,
  ChevronLeft,
  PanelRight,
} from "lucide-react";
import styles from "./Courses.module.css";

const allCourses = [
  { name: "Spiritual Formation & Kingdom Identity", icon: BookOpen },
  { name: "Purpose Discovery & Life Mastery", icon: Target },
  { name: "Mindshift & Productivity Mastery", icon: Brain },
  { name: "Business, Career & Financial Intelligence", icon: Briefcase },
  { name: "Leadership & Capacity Building", icon: Users },
  { name: "Public Speaking & Influence", icon: Mic },
  { name: "Marriage & Relationship Intelligence", icon: Heart },
  { name: "Special Capacity-Building Labs", icon: FlaskConical },
  { name: "Digital Influence & Media Mastery", icon: Monitor },
  { name: "Generational Impact Modules", icon: Globe },
];

export default function CoursePage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  return (
    
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
      >
        <button
          className={styles.toggleBtn}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        <ul className={styles.courseList}>
          {allCourses.map(({ name, icon: Icon }, i) => (
            <li key={i}>
              <button
                onClick={() => router.push(`/Courses/${i}`)}
                className={id === i ? styles.activeLink : ""}
              >
                <Icon size={20} className={styles.courseIcon} />
                {!collapsed && (
                  <span className={styles.courseText}>{name}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.content}>
        {id === 0 && (
          <div>
           <h1>Coming soon</h1>
          </div>
        )}

        {id === 1 && (
          <div>
             <PurposeDiscovery />
          </div>
        )}

        {id === 2 && (
          <div>
            <h1>Mindshift & Productivity Mastery</h1>
            <p>Here’s the full content for this course...</p>
          </div>
        )}
      </main>
    </div>
  );
}
