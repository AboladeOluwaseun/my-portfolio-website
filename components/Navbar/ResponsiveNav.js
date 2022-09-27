// import React from "react";

// const ResponsiveNav = ({ activePage, pageName = "" }) => {
//   const [active, setActive] = useState(activePage || "home");

//   function handleActive(e) {
//     let tgt = e.target.dataset;
//     let parent = e.target.parentElement.dataset;

//     if (Object.entries(tgt).length === 0) {
//       if (Object.entries(parent).length > 0) {
//         let { name } = parent;
//         setActive(name);
//       }
//       return;
//     }
//     let { name } = tgt;
//     setActive(name);
//   }

//   return (
//     <div className={`mobileNav`}>
//       <div className={`main`}>
//         <li
//           className={active === "home" ? `active` : `li`}
//           data-name="home"
//           onClick={handleActive}
//         >
//           <Link href="/">
//             <ion-icon name="home-outline" class={`icon`}></ion-icon>
//           </Link>
//           <label className={`label`}>Home</label>
//         </li>
//         <li
//           className={active === "projects" ? `active` : `li`}
//           data-name="projects"
//           onClick={handleActive}
//         >
//           <Link href="/projects">
//             <ion-icon name="cube-outline" class={`icon`}></ion-icon>
//           </Link>
//           <label className={`label`}>Projects</label>
//         </li>
//         <li
//           className={active === "about" ? `active` : `li`}
//           data-name="about"
//           onClick={handleActive}
//         >
//           <Link href="/about">
//             <ion-icon name="person-outline" class={`icon`}></ion-icon>
//           </Link>
//           <label className={`label`}>About</label>
//         </li>
//         <li
//           className={active === "contact" ? `active mr-5` : `li mr-5`}
//           data-name="contact"
//           onClick={handleActive}
//         >
//           <Link href={pageName === "" ? "#contact" : "/#contact"}>
//             <ion-icon name="mail-outline" class={`icon`}></ion-icon>
//           </Link>
//           <label className={`label`}>Contact</label>
//         </li>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveNav;
