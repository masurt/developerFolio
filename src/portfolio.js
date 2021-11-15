/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tilman Masur",
  title: "Hi, I'm Tilman",
  subTitle: emoji("A quantitative generalist."),
  resumeLink:
    "https://www.dropbox.com/s/wqevem1tqxnqr36/2021-11-11_CV_Tilman_Masur_Website.pdf?dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/masurt",
  linkedin: "https://www.linkedin.com/in/tilman-masur-8524991a5/",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  twitter: "https://twitter.com/MasurT",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Full-Stack Dev with a Quantitative Focus",
  skills: [
    emoji("⚡ Data analysis and visualization"),
    emoji("⚡ Cloud based machine learning pipelines"),
    emoji("⚡ Public speaking & teaching")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Scipy",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fab fa-table"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georg-August-University Göttingen",
      logo: require("./assets/images/goettingen_logo.svg"),
      subHeader: "Master of Science Physics",
      duration: "Sep 2018 - Nov 2021",
      desc: "Research focus in astro physics.",
      descBullets: [
        "Master's thesis: automating observations of exoplanet transits",
        "Development of a Django-app for observation planning",
        "Automating data analysis with multi-step pipeline"
      ]
    },
    {
      schoolName: "Georg-August-University Göttingen",
      logo: require("./assets/images/goettingen_logo.svg"),
      subHeader: "Bachelor of Science Physics",
      duration: "Sep 2015 - Nov 2018",
      desc: "Graduated with distinction focusing on complex systems and non-linear dynamics."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning, Data Analysis & Visualization", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend, Cluster & Cloud",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/logo-color_with_planet.png"),
      projectName: "ExoTOM",
      projectDesc:
        "Master's thesis project: a target-observation-manager for automating exoplanet transit observations",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://gitlab.gwdg.de/monet/exotom"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/logo-color_with_planet.png"),
      projectName: "RechenschaftsBot - Accountability Bot",
      projectDesc:
        "A Telegram bot to keep you accountable. Add him to a group, create new todos with a date and fine. Let the bot and your friends to the rest.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/masurt/rechenschaftsbot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/logo-color_with_planet.png"),
      projectName: "WikiCrawler",
      projectDesc:
        "A Wikipedia crawler that analyzes whether the articles on a certain topic are short or missing in certain languages.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/masurt/wiki_crawler"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "My posts on the EA forum.",

  blogs: [
    {
      url: "https://forum.effectivealtruism.org/posts/yfJpkfzLeKAiyf3g4/pandemic-prevention-in-german-parties-federal-election",
      title:
        "Pandemic prevention in German parties' federal election platforms",
      description:
        "A short review of the general (not COVID-specific) pandemic prevention measures the main German parties proposed in their 2021 federal election platforms."
    },
    {
      url: "https://forum.effectivealtruism.org/posts/ijQL2wiyGtvNJPZCf/deliberate-consumption-of-emotional-content-to-increase",
      title:
        "Deliberate Consumption of Emotional Content to Increase Altruistic Motivation",
      description:
        "Should we actively seek out emotional content to increase our motivation to follow through with our altruistic commitments?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I enjoy giving talks and sharing my thoughts"
  ),

  talks: [
    {
      title: "Speech at MUNOL 2021 Openings",
      subtitle:
        "I talked about longtermism and existential threats at the Model United Nations of Lübeck.",
      watch_url: "https://youtu.be/lsppHs9qqbs?t=901",
      event_url: "https://munol.org/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a collaboration or just say hi :)",
  number: "",
  email_address: "tilman@masur.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
