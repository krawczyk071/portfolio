export const projects = [
  {
    id: "rental",
    title: "BikeRental",
    short:
      "Rental website with user <b>authentication</b> using <b>Firebase</b>. <b>Admin</b> users can manage inventory. React <b>Router</b> applied with features like protected  routes, shared navigation with routing outlets, useLocation hook. State managed using <b>reducers</b>. ",
    shortpl:
      "Wypożyczalnia rowerów z możliwością logowania <b>Firebase</b>. Admin może zarządzać flotą. Użyto React <b>Router</b> w szczególności protected routes, routing outlets dla współdzielenia navigacji, useLocation hook. Stan aplikacji aktualizowany przez <b>reducer</b>.",
    live: "https://bikerentalproject.netlify.app/",
    git: "https://github.com/krawczyk071/bike-rental",
    img_cover: "img/xbikes.png",
    img_xl: "img/mkbikes4.png",
    img_md: "img/mkbikes4.png",
    tech: ["Firebase", "React", "HTML", "JavaScript", "CSS"],
  },
  {
    id: "shop",
    title: "BigHead",
    short:
      "e-commerce site selling NewEra baseball caps based on <b>API</b> from rapidApi. CSS styling managed with <b>SASS</b>. Site features filters, pagination, product detail page and shoping cart built with React <b>Router</b> and <b>Context</b>.",
    shortpl:
      "Strona e-commerce sprzedająca czapeczki bejsbolowe oparta na <b>API</b> z rapidApi. CSS przy użyciu <b>SASS</b>. Dzięki React <b>Router</b> i przechowywaniu stanu w <b>Context</b> możliwe filtry, paginacja, strona szczegółowa a także koszyk zakupów.",
    live: "https://bigheadshop.netlify.app/",
    git: "https://github.com/krawczyk071/hat-shop",
    img_cover: "img/xhats.png",
    img_xl: "img/mkhats4.png",
    img_md: "img/mkhats4.png",
    tech: ["restAPI", "ReactRouter", "SASS", "React", "npm"],
  },
  {
    id: "movies",
    title: "ShowSelector",
    short:
      "This website showcases new movies sourced from an external <b>API</b>. Styled with <b>Tailwind</b> and utilize <b>NPM</b> libraries for improved functionality. Users can manage a personal watchlist or view trailers from YouTube.",
    shortpl:
      "Strona prezentuje najnowsze hity filmowe. Dane pochodzą z zewnętrznego <b>API</b>. Do stylizacji użyto <b>Tailwind</b>. Rozszerzenie funkcjonalności dzięki dodatkowym bibliotekom <b>NPM</b>. Użytkownicy mogą tworzyć własną listę do obejrzenia i oglądać trailery filmów.",
    live: "https://showselector.netlify.app/",
    git: "https://github.com/krawczyk071/show-selector",
    img_cover: "img/xmovies.png",
    img_xl: "img/mkmovies4.png",
    img_md: "img/mkmovies4.png",
    tech: ["restAPI", "tailwind", "React", "npm", "JavaScript"],
  },
  {
    id: "tattoo",
    title: "Tattoo finder",
    short:
      "Social media site to find tattoo designs. Everyone can add design to favorites, order chosen tattoo or just vote. <b>Redux</b> handles state. Data stored on <b>Firebase</b> with <b>Cloudinary</b> used for photo hosting and optimalization. <b>Styled components</b> used for CSS",
    shortpl:
      "Strona social media do przeglądania wzorów tatuaży. Użytkownik może dodać wzór do ulubionych, zamówić wykonanie czy zagłosować. Stan obsługiwany przez <b>Redux</b>. Dane przechowywane w <b>Firebase</b>, serwis <b>Cloudinary</b> użyty do optymalizacji zdjęć. CSS z użyciem <b>Styled components</b>.",
    live: "https://tattoofinder.netlify.app/",
    git: "https://github.com/krawczyk071/tattoo-finder",
    img_cover: "img/xtattoos.png",
    img_xl: "img/mktattoos4.png",
    img_md: "img/mktattoos4.png",
    tech: ["Redux", "Firebase", "Cloudinary", "styledComponents", "React"],
  },
  {
    id: "mern",
    title: "MERN project",
    short:
      "I am currently working on a MERN stack project, leveraging MongoDB, Express, React, and Node.js to develop a dynamic and responsive web application.",
    shortpl:
      "I am currently working on a MERN stack project, leveraging MongoDB, Express, React, and Node.js to develop a dynamic and responsive web application.",
    live: "url",
    git: "url",
    img_cover: "img/xmern.png",
    img_xl: "img/mkmern4.png",
    img_md: "img/mkmern4.png",
    tech: ["mongoDB", "express", "React", "nodeJS", "GraphQl", "Docker", "AWS"],
  },
];

export const icons = [
  {
    name: "Python",
    icon: <i className="fa-brands fa-python"></i>,
    isvg: "./techsvg/xpython.svg",
  },
  {
    name: "Cloudinary",
    isvg: "./techsvg/icloudinary.svg",
  },
  {
    name: "nodeJS",
    icon: <i className="fa-brands fa-node-js"></i>,
    isvg: "./techsvg/xnodejs.svg",
  },
  {
    name: "Docker",
    icon: <i className="fa-brands fa-docker"></i>,
    isvg: "./techsvg/xdocker.svg",
  },
  {
    name: "AWS",
    icon: <i className="fa-brands fa-aws"></i>,
    isvg: "./techsvg/xaws.svg",
  },
  {
    name: "mongoDB",
    svg: "./techsvg/mongodb-icon.svg",
    isvg: "./techsvg/xmongodb.svg",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/mongodb-icon.svg" alt="icon" />
      </div>
    ),
  },
  {
    name: "express",
    svg: "./techsvg/expressjs-ar21.svg",
    isvg: "./techsvg/xexpress.svg",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/expressjs-ar21.svg" alt="icon" />
      </div>
    ),
  },
  {
    name: "NextJS",
    svg: "./techsvg/nextjs-icon.svg",
    isvg: "./techsvg/xnextjs.svg",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/nextjs-icon.svg" alt="icon" />
      </div>
    ),
  },
  {
    name: "github",
    icon: <i className="fa-brands fa-github"></i>,
    isvg: "./techsvg/xgithub.svg",
  },
  {
    name: "linkedin",
    icon: <i className="fa-brands fa-linkedin"></i>,
    isvg: "./techsvg/xlinkedin.svg",
  },
  {
    name: "HTML",
    icon: <i className="fa-brands fa-html5"></i>,
    isvg: "./techsvg/xhtml.svg",
  },
  {
    name: "git",
    icon: <i className="fa-brands fa-git-alt"></i>,
    isvg: "./techsvg/xgit.svg",
  },
  {
    name: "JavaScript",
    icon: <i className="fa-brands fa-js"></i>,
    isvg: "./techsvg/xjs.svg",
  },
  {
    name: "Firebase",
    svg: "./techsvg/firebase-icon.svg",
    isvg: "./techsvg/xfirebase.svg",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/firebase-icon.svg" alt="icon" />
      </div>
    ),
    title: "",
    text: "",
  },
  {
    name: "Coursera",
    svg: "./techsvg/coursera-ar21.svg",
    title: "",
    text: "",
  },
  {
    name: "Google",
    svg: "./techsvg/google_i.svg",
    title: "Google for Coursera",
    text: "Google Data Analytics Specialization",
  },
  {
    name: "IBM",
    svg: "./techsvg/ibm_i.svg",
    title: "IBM for Coursera",
    text: "IBM Data Analyst Specialization",
  },
  {
    name: "DataCamp",
    svg: "./techsvg/datacampnew_i.svg",
    title: "DataCamp",
    text: "Data Scientist with Python Track",
  },
  {
    name: "The Odin Project",
    svg: "./techsvg/odin_i.svg",
    title: "The Odin Project",
    text: "Full Stack JavaScript",
  },
  {
    name: "Harvard",
    svg: "./techsvg/cs50_i.svg",
    title: "Harvard edX",
    text: "CS50 Introduction to Computer Science",
  },
  {
    name: "Codecademy",
    svg: "./techsvg/codecademy-ar21.svg",
    title: "Codecademy",
    text: "Learn Advanced React",
  },
  {
    name: "free-code-camp",
    svg: "./techsvg/fcc_i.svg",
    title: "freeCodeCamp",
    text: "Front End Development Libraries",
  },
  {
    name: "scrimba",
    svg: "./techsvg/scrimba_i.svg",
    title: "scrimba",
    text: "Advanced React",
  },
  {
    name: "CSS",
    icon: <i className="fa-brands fa-css3-alt"></i>,
    isvg: "./techsvg/xcss.svg",
  },
  {
    name: "React",
    icon: <i className="fa-brands fa-react"></i>,
    isvg: "./techsvg/xreact.svg",
  },
  {
    name: "SASS",
    icon: <i className="fa-brands fa-sass"></i>,
    isvg: "./techsvg/xsass.svg",
  },
  {
    name: "npm",
    icon: <i className="fa-brands fa-npm"></i>,
    isvg: "./techsvg/xnpm.svg",
  },
  {
    name: "tailwind",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/tailwindcss-icon.svg" alt="icon" />
      </div>
    ),
    svg: "./techsvg/tailwindcss-icon.svg",
    isvg: "./techsvg/xtailwind.svg",
  },
  {
    name: "netlify",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/netlify-icon.svg" alt="icon" />
      </div>
    ),
    svg: "./techsvg/netlify-icon.svg",
    isvg: "./techsvg/xnetlify.svg",
  },
  {
    name: "Redux",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/redux.svg" alt="icon" />
      </div>
    ),
    isvg: "./techsvg/xredux.svg",
  },
  {
    name: "ReactRouter",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/router.svg" alt="icon" />
      </div>
    ),
    isvg: "./techsvg/xrouter.svg",
  },
  {
    name: "styledComponents",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/styled-alt_i.svg" alt="icon" />
      </div>
    ),
    isvg: "./techsvg/istyled.svg",
  },
  {
    name: "restAPI",
    svgicon: (
      <div className="svgicon">
        <img src="./techsvg/api.svg" alt="icon" />
      </div>
    ),
    isvg: "./techsvg/xapi.svg",
  },
  {
    name: "SQL",
    isvg: "./techsvg/xsql.svg",
  },
  {
    name: "GraphQl",
    isvg: "./techsvg/xgraphql.svg",
  },
  {
    name: "Gatsby",
    isvg: "./techsvg/xgatsby.svg",
  },
  {
    name: "Flask",
    isvg: "./techsvg/xflask.svg",
  },
  {
    name: "Django",
    isvg: "./techsvg/xdjango.svg",
  },
  {
    name: "TypeScript",
    isvg: "./techsvg/xtypescript.svg",
  },
];

export const eduLogos = [
  "Harvard",
  "The Odin Project",
  "Codecademy",
  "free-code-camp",
  "DataCamp",
  "IBM",
  "Google",
  "scrimba",
];

export const techLogosALL = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "git",
  "github",

  "npm",
  "styledComponents",
  "SASS",
  "tailwind",
  "netlify",
  "Firebase",
  "Redux",
  "ReactRouter",
  "restAPI",
  "nodeJS",
];
export const skills = [
  "React",
  "JavaScript",
  "CSS",
  "git",
  "HTML",
  "github",
  "Redux",
  "Firebase",
  "ReactRouter",
];
export const skillsSM = [
  "npm",
  "SASS",
  "tailwind",
  "netlify",
  "restAPI",
  "Python",
  "SQL",
  "nodeJS",
];

export const contact = [
  { id: "name", type: "text", placeholder: "Name", name: "name" },
  { id: "email", type: "email", placeholder: "Email", name: "email" },
  { id: "message", type: "text", placeholder: "Message", name: "message" },
];
export const content = { about: {} };

// CSS
// JavaScript
// SASS
// GIT
// React
// npm

// tailwind
// netlify
// firebase

/* 
  
<i  className="fa-brands fa-js"></i>
<i  className="fa-brands fa-git-alt"></i> 

<i  className="fa-brands fa-figma"></i>
<i  className="fa-brands fa-stripe"></i>
<i  className="fa-brands fa-python"></i>
<i  className="fa-brands fa-node"></i>
<i  className="fa-brands fa-node-js"></i>
<i  className="fa-brands fa-bootstrap"></i>

<i  className="fa-brands fa-docker"></i>
<i  className="fa-brands fa-aws"></i> */
export const textEn = {
  nav1: "Home",
  nav2: "About",
  nav3: "Projects",
  nav4: "Contact",
  hero: "Discover my Work",
  about: "ABOUT ME",
  aboutLine:
    "Here you will find more information about me, what I do, and a few technologies I've been working with recently",
  aboutSkills: "My Skills",
  aboutHi: "Get to know me!",
  aboutText:
    "Hello! My name is Szymon and I enjoy creating web applications that are both functional and visually attractive. I am committed to continuously learning, exploring new technologies and expanding my skill set.<br> Check out some of my work in the Projects section to discover the skills, tools and technologies I use.<br> Feel free to visit my GitHub and LinkedIn profiles to learn more about my job experience.<br> If you have a good opportunity that matches my potential then don't hesitate to contact me.",
  aboutBtn: "Contact",
  aboutTrainings: "Completed Trainings",
  projects: "PROJECTS",
  projectsBtn: "MORE",
  projectsLine:
    "Here you will find some of the projects that I created to showcase my skills.<br> Each project containing its short description.",
  projectsWip: "IN DEVELOPMENT",
  contact: "CONTACT",
  contactLine:
    "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.",
  formA1: "Name",
  formA2: "Please enter your Name",
  formB1: "Email",
  formB2: "Please enter your Email",
  formC1: "Message",
  formC2: "Please enter your Message",
  err1: "Please provide value for each field",
  err2: "Email sent. Thank you.",
  formBtn: "Send",
  foot: "Szymon Krawczyk",
  footText:
    "Developing interactive, user-friendly, and feature rich websites and applications.",
};
export const textPl = {
  nav1: "Home",
  nav2: "O mnie",
  nav3: "Projekty",
  nav4: "Kontakt",
  hero: "Poznaj moje aplikacje",
  about: "O mnie",
  aboutLine:
    "Tutaj znajdziesz więcej informacji o mnie, czym się zajmuję, a także poznasz technologie z których korzystałem w ostatnim czasie.",
  aboutSkills: "Co potrafię",
  aboutHi: "Poznaj mnie!",
  aboutText:
    "Cześć! Jestem Szymon, pasjonuje mnie tworzenie aplikacji internetowych, które są nie tylko wysoce funkcjonalne, ale także atrakcyjne wizualnie. Z dużą przyjemnością nieustannie uczę się, poszukuje nowych technologii, aby rozszerzać moje umiejętności. Zachęcam do zapoznania się z moimi pracami w sekcji Projekty, gdzie można odkryć umiejętności narzędzia i technologie które zastosowałem. Proszę odwiedź również moje profile na GitHub i LinkedIn żeby dowiedzieć się więcej o moim doświadczeniu zawodowym. Jeżeli to, co potrafię charakteryzuje osobę którą potrzebujesz zatrudnić nie wahaj się skontaktować się ze mną.",
  aboutBtn: "Kontakt",
  aboutTrainings: "Ukończone szkolenia",
  projects: "Projekty",
  projectsBtn: "Więcej",
  projectsLine:
    "Tutaj znajdziesz kilka moich aplikacji które stworzyłem aby zademonstrować swoje umiejętności.<br>Przeczytaj opis każdego projektu!",
  projectsWip: "Pracuję nad tym",
  contact: "Kontakt",
  contactLine:
    "Skontaktuj się ze mną wypełniając formularz poniżej. Odpiszę na wszystkie wiadomości jak najszybciej to możliwe.",
  formA1: "Imię",
  formA2: "Proszę podaj Imię",
  formB1: "Email",
  formB2: "Proszę podaj Email",
  formC1: "Wiadomość",
  formC2: "Proszę podaj Wiadomość",
  formBtn: "Wyślij",
  err1: "Proszę uzupełnij każde pole.",
  err2: "Email wysłany! Dziękuję za wiadomość.",
  foot: "Szymon Krawczyk",
  footText:
    "Zajmuję się tworzeniem nowoczesnych aplikacji w oparciu o technologie HTML, CSS i JavaScript.",
};
