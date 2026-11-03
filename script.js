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
        heroTag: "FULL STACK DEVELOPER",
        heroTitle: "Web and mobile applications",
        heroDescription: "From frontend to backend, focused on useful, intuitive, and reliable solutions.",
        heroProjects: "View projects",
        heroContact: "Contact",
        aboutTitle: "About me",
        aboutIntro: "Hi, my name is Santiago Santoro.",
        aboutParagraph1: "I am a Full Stack Developer focused on web and mobile application development using React, Node.js, TypeScript, and React Native.",
        aboutParagraph2: "I specialize in building complete products from frontend to backend, with experience working with databases such as MongoDB, Firebase, and Supabase.",
        aboutParagraph3: "I develop modern, responsive, and scalable applications, prioritizing performance, user experience, and development best practices.",
        aboutParagraph4: "My previous administrative roles strengthened my organizational, communication, and teamwork skills.",
        personalDetails: "Personal details",
        email: "Email",
        location: "Location",
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
        coderhouseDuration: "Full Stack Development Program · 1 year and 4 months.",
        coderhouseTopics: "Topics: HTML, CSS, JavaScript, React, Node.js, Express, and SQL/NoSQL databases.",
        certificates: "Certificates:",
        backendProgramming: "Backend Programming",
        reactCareer: "React Frontend Development Program",
        webDevelopment: "Web Development",
        seProgramarDescription: "Programming fundamentals and logic with Gobstones, JavaScript, and Ruby.",
        certificate: "Certificate:",
        freeCodeCampCourse: "Responsive Web Design and JavaScript",
        freeCodeCampDescription: "HTML, CSS, responsive design, algorithms, and data structures.",
        selfTaught: "Self-taught",
        selfTaughtDescription: "Independent online study of HTML and CSS.",
        fullStackDeveloper: "Full Stack Developer",
        frontendDeveloper: "Frontend Developer",
        adminLogistics: "Administration, Logistics & Warehouse",
        hrAccounting: "HR & Accounting Administrative Assistant",
        uprazeDescription: "Worked on Muscul-Arte, focusing on Supabase, user management, routine features, and unit tests with Jest. Also contributed to UX improvements and E2E testing with Detox, using Git, Pull Requests, code reviews, and Linear.",
        backendExperience: "Built a full-stack e-commerce app with Node.js, Express, and MongoDB. Implemented a REST API, user authentication, and Swagger documentation.",
        xtremeExperience: "Built an online shop with React, React Bootstrap, and Firebase, featuring a catalog, cart, and simulated checkout.",
        underMyFeetExperience: "Built a band's website and merchandise shop with JavaScript, Bootstrap, and Sass, including a cart and simulated checkout.",
        limanskyExperience: "Managed electronic invoicing and orders, coordinated deliveries, and handled receiving, inventory, and claims. Also supported customer service, sales, and payments.",
        conexysExperience: "Managed billing and accounts with Tango 3. Also supported HR processes, banking procedures, and public and private tender documentation.",
        portfolioTitle: "Projects",
        viewProject: "View project",
        mobilePrivate: "Mobile app · No web demo (private repository)",
        musculArteDescription: "Gym management app developed with Upraze Systems.",
        musculArteTeacherAlt: "Muscul-Arte trainer dashboard",
        musculArteDashboardAlt: "Muscul-Arte main dashboard",
        musculArteRolesAlt: "Muscul-Arte role management screen",
        musculArteRoutineAlt: "Muscul-Arte routine creation screen",
        musculArteExerciseAlt: "Muscul-Arte exercise creation screen",
        technologies: "Technologies",
        openFootballProject: "Open Fútbol Argentino Live",
        footballDescription: "An Argentine football app for following results, live matches, league tables, standings averages, and club histories.",
        footballCoverAlt: "Fútbol Argentino Live homepage showing the Primera División",
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
        contactInvitationEyebrow: "Let's talk",
        contactInvitationTitle: "Have a project in mind?",
        contactInvitation: "Tell me about it. I'm open to discussing ideas, projects, and new opportunities.",
        contactReply: "I'll get back to you soon."
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
