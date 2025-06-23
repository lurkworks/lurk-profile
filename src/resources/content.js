import {Logo} from "@once-ui-system/core";

const person = {
    firstName: "Lurk",
    lastName: "Works",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Software Developer",
    avatar: "/images/avatar.jpg",
    email: "lurkworks@appmail.uk",
    location: "Asia/Tokyo",
    languages: ["Japanese", "English"],
};

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I write about Java, Kotlin, and software development. Follow along as I share insights on creating magical
            developer tools and applications.
        </>
    ),
};

const social = [
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/lurkworks/",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
];

const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Crafting Magical Software Solutions</>,
    featured: {
        display: true,
        title: <>Recent project: <strong className="ml-4">Java & Kotlin Tools</strong></>,
        href: "/work/building-developer-tools",
    },
    subline: (
        <>
            I'm Lurk, a software developer from Japan who loves working with Java and Kotlin.
            <br/> Building tools and applications that make developers' lives easier.
        </>
    ),
};

const about = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://cal.com",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                Based in Japan, Lurk is a passionate software developer specializing in Java and Kotlin development.
                With a keen eye for creating efficient and user-friendly developer tools, he focuses on building
                applications that seamlessly blend functionality with innovation.
            </>
        ),
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Argano Corporation",
                timeframe: "2024 - Present",
                role: "Senior Software Developer",
                achievements: [
                    <>
                        Leading backend server development using Node.js, including infrastructure design and
                        implementation.
                    </>,
                    <>
                        Spearheading API development, database design, and infrastructure environment setup as a backend
                        engineer.
                    </>,
                ],
                images: [
                    {
                        src: "/images/projects/project-01/cover-01.jpg",
                        alt: "Developer Tools Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },

        ],
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            {
                name: "Self-Taught Java Development",
                description: <>Learning Java and software development independently, collaborating with AI assistants
                    for continuous improvement</>,
            },
        ],
    },
    technical: {
        display: true,
        title: "Technical skills",
        skills: [
            {
                title: "Java Development",
                description: <>Expert in building scalable applications and developer tools with Java</>,
                images: [
                    {
                        src: "/images/projects/project-01/cover-02.jpg",
                        alt: "Java Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "Kotlin　Development",
                description: <>Creating modern, concise, and powerful applications using Kotlin</>,
                images: [
                    {
                        src: "/images/projects/project-01/cover-04.jpg",
                        alt: "Kotlin Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
        ],
    },
};

const blog = {
    path: "/blog",
    label: "Blog",
    title: "Insights on Software Development",
    description: `Read ${person.name}'s thoughts on Java, Kotlin, and software engineering`,
};

const work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Software development projects by ${person.name}`,
};

const gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A collection of development projects and coding adventures`,
    images: [
        {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "image",
            orientation: "vertical",
        },
    ],
};

export {person, social, newsletter, home, about, blog, work, gallery};