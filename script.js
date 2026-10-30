let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
const translations = {
    en: {
        navHome: "HOME",
        navAbout: "ABOUT",
        navSkills: "SKILLS",
        navResume: "RESUME",
        navPortfolio: "PROJECTS",
        navContact: "CONTACT",
        heroTitle: "I build web and mobile applications end to end",
        heroDescription: "Full Stack Developer focused on building web and mobile applications, from intuitive interfaces to reliable backend solutions.",
        heroProjects: "View projects",
        heroContact: "Contact",
        aboutTitle: "About me",
        aboutIntro: "Hi, my name is Santiago Santoro.",
        aboutParagraph1: "I am a Full Stack Developer focused on web and mobile application development using React, Node.js, TypeScript, and React Native.",
        aboutParagraph2: "I specialize in building complete products from frontend to backend, with experience working with databases such as MongoDB, Firebase, and Supabase.",
        aboutParagraph3: "I develop modern, responsive, and scalable applications, prioritizing performance, user experience, and development best practices.",
        aboutParagraph4: "My previous administrative roles strengthened my organizational, communication, and teamwork skills.",
        personalDetails: "Personal details",
        birthday: "Birthday",
        email: "Email",
        location: "Location",
        position: "Availability",
        focus: "Focus",
        downloadCv: "Download CV",
        downloadResume: "Download English resume",
        resumeTitle: "Resume",
        education: "Education",
        professionalExperience: "Professional experience",
        skillsTitle: "Technologies & skills",
        technicalSkills: "Technologies",
        webTechnologies: "Web",
        tools: "Tools",
        mobileCloudSkills: "Mobile & cloud",
        professionalSkills: "Professional skills",
        communication: "Communication",
        teamwork: "Teamwork",
        creativity: "Creativity",
        dedication: "Commitment",
        continuousLearning: "Continuous learning",
        problemSolving: "Problem solving",
        versionControl: "Version control",
        fullStackCourse: "Full Stack Development Program",
        seProgramar: "Se Programar (Argentina Programa)",
        freeCodeCampCourse: "Responsive Web Design / JavaScript Algorithms and Data Structures",
        coderhouseDuration: "Full Stack Development Program. Duration: 1 year and 4 months.",
        coderhouseSummary: "I completed a Full Stack Development Program, gaining solid knowledge across a wide range of key web development areas.",
        coursesCompleted: "Completed courses include:",
        webCourseDescription: "Web Development: Learned the fundamentals of building websites and web applications, including HTML, CSS, and responsive design principles.",
        javascriptCourseDescription: "JavaScript: Learned core programming concepts for web development, including variables, functions, objects, and DOM manipulation.",
        reactCourseDescription: "React: Developed skills for building dynamic, scalable user interfaces with components, state, props, and event handling.",
        backendCourseDescription: "Backend Programming: Learned server-side logic and functionality using Node.js, Express.js, and relational and non-relational databases.",
        coderhouseConclusion: "These courses provided a solid foundation in both frontend and backend development, preparing me to work on full-stack projects.",
        certificates: "Certificates:",
        backendProgramming: "Backend Programming",
        reactCareer: "React Frontend Development Program",
        webDevelopment: "Web Development",
        seProgramarDuration: "Se Programar course by Argentina Programa. Duration: 5 months.",
        seProgramarDescription: "Completed Argentina Programa's Se Programar course, studying Gobstones, JavaScript, Ruby, and programming logic.",
        certificate: "Certificate:",
        freeCodeCampDuration: "FreeCodeCamp courses. Duration: 8 months.",
        freeCodeCampDescription: "Studied HTML and CSS for web design, and explored JavaScript algorithms and data structures.",
        selfTaught: "Self-taught",
        selfTaughtDuration: "Online courses by independent programming educators. Duration: 5 months.",
        selfTaughtDescription: "Built foundational skills in HTML and CSS through online courses.",
        fullStackDeveloper: "Full Stack Developer",
        frontendDeveloper: "Frontend Developer",
        adminLogistics: "Administration, Logistics & Warehouse",
        hrAccounting: "HR & Accounting Administrative Assistant",
        uprazeDescription: "Worked on Muscul-Arte, a gym management application. Contributed to database and user management, frontend features for managing routines and training days, and end-to-end testing with Detox.",
        backendExperience: "Developed a full-stack e-commerce project using Node.js, Express.js, MongoDB, and Handlebars. Built a REST API and implemented user authentication with JWT, Passport, and Express Session. Documented the API with Swagger.",
        xtremeExperience: "Developed Xtreme Shop, a skate and apparel e-commerce project using React, React Bootstrap, and Firebase. Implemented product browsing, a shopping cart, a simulated checkout, customer messaging, and purchase receipts.",
        underMyFeetExperience: "Developed a website for a music band with a merchandise section and simulated shopping flow. Used JavaScript, HTML, CSS, Bootstrap, and Sass to build responsive layouts and interactive features.",
        limanskyExperience: "Managed electronic invoicing and order entry, coordinated local deliveries, received and checked shipments, handled claims and inventory, and supported customer service, quotations, sales, and payments.",
        conexysExperience: "Worked with the Tango 3 Evolución system in billing and account management. Responsibilities included hiring support, banking and government procedures, coordination across departments, staff assistance, and preparing public and private tender documents.",
        portfolioTitle: "Projects",
        mobilePrivate: "Mobile app · No web demo (private repository)",
        musculArteDescription: "A gym management application. At Upraze Systems, I worked on the database and user management, routine and training-day features, and E2E testing.",
        musculArteTeacherAlt: "Muscul-Arte trainer dashboard",
        musculArteDashboardAlt: "Muscul-Arte main dashboard",
        musculArteRolesAlt: "Muscul-Arte role management screen",
        technologies: "Technologies",
        inDevelopment: "In development",
        footballDescription: "An Argentine football app for following results, live matches, league tables, standings averages, and club histories.",
        backendProjectSummary: "Full Stack e-commerce with a REST API, user authentication, and Swagger documentation.",
        xtremeProjectSummary: "Online skate shop with a product catalog, cart, and simulated Firebase checkout.",
        merchProjectSummary: "Band website with a merchandise store, shopping cart, and simulated checkout.",
        bandProjectSummary: "Responsive Under My Feet website with band information and a link to its merchandise.",
        portfolioProjectSummary: "Personal portfolio showcasing my profile, experience, and development projects.",
        contactTitle: "Contact",
        namePlaceholder: "Your name",
        phonePlaceholder: "Phone number",
        emailPlaceholder: "Email address",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Message",
        sendMessage: "Send message",
        contactLocation: "Rosario, Santa Fe, Argentina",
        contactLinkedIn: "Contact me:",
        contactEmail: "Email:"
    }
};

function setLanguage(language) {
    const languageButton = document.getElementById("language-toggle");
    const isEnglish = language === "en";
    const copy = isEnglish ? translations.en : null;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (isEnglish && copy[key]) {
            element.textContent = copy[key];
        } else if (!isEnglish) {
            element.textContent = element.dataset.spanishText || element.textContent;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (isEnglish && copy[key]) {
            element.placeholder = copy[key];
        } else if (!isEnglish) {
            element.placeholder = element.dataset.spanishPlaceholder;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        if (isEnglish && copy[key]) {
            element.alt = copy[key];
        } else if (!isEnglish) {
            element.alt = element.dataset.spanishAlt;
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        if (isEnglish && copy[key]) {
            element.setAttribute("aria-label", copy[key]);
        } else if (!isEnglish) {
            element.setAttribute("aria-label", element.dataset.spanishAriaLabel);
        }
    });

    languageButton.textContent = isEnglish ? "ES" : "EN";
    languageButton.setAttribute(
        "aria-label",
        isEnglish ? "Cambiar idioma a español" : "Switch language to English"
    );
    document.title = isEnglish ? "Santiago Santoro | Full Stack Developer" : "Santiago Santoro Portfolio";

    try {
        localStorage.setItem("portfolio-language", language);
    } catch (error) {
        console.warn("Could not save the selected portfolio language.", error);
    }
}

document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.dataset.spanishText = element.textContent;
});

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.dataset.spanishPlaceholder = element.placeholder;
});

document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.dataset.spanishAlt = element.alt;
});

document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.dataset.spanishAriaLabel = element.getAttribute("aria-label");
});

document.getElementById("language-toggle").addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(nextLanguage);
});

let initialLanguage = "es";
try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage === "en" || savedLanguage === "es") {
        initialLanguage = savedLanguage;
    }
} catch (error) {
    console.warn("Could not load the saved portfolio language.", error);
}
if (initialLanguage !== "es") {
    setLanguage(initialLanguage);
}
