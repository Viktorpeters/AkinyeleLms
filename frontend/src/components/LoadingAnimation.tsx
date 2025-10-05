// "use client";

// import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const LoadingAnimation = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         width: "100vw",
//         zIndex: 1000,
//         background: "#f9fafb", 
//       }}
//     >
//       <DotLottieReact
//         src="https://lottie.host/0f678c21-7fd7-4d74-9174-8b9583b19815/SXYnCtGkeV.lottie"
//         loop
//         autoplay
//         style={{
//           width: "600px",
//           height: "200px",
//         }}
//       />
//     </div>
//   );
// };

// export default LoadingAnimation;

"use client";

import React from "react";
import styles from "./LoadingAnimation.module.css"


export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
