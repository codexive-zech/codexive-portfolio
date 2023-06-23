import Experience from "./Experience";
import NavLink from "./NavLink";
import Projects from "./projects";
import Skills from "./Skills";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    label: "Home",
    page: "home",
  },
  {
    id: 2,
    label: "About",
    page: "about",
  },
  {
    id: 3,
    label: "Projects",
    page: "projects",
  },
  {
    id: 4,
    label: "Contact",
    page: "contact",
  },
];

export const skills: Skills[] = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Java" },
  { skill: "SpringBoot" },
];

export const projects: Projects[] = [
  {
    id: 1,
    title: "HouseMatch",
    description:
      "A web application that enable realtors to connect ith tenants in other to rent/sell out houses. Realtors can create, update and delete a house listing, Tenants get to contact Home Owner when the find houses they are interested in.",
    img: "/housematch.png",
    githubLink: "https://github.com/codexive-zech/Real-Estate-Housing-App",
    liveLink: "https://housematch.vercel.app/",
  },
  {
    id: 2,
    title: "Nike Sneakers Store",
    description:
      "Nike Sneaker Store is a Dropshipping store for Sneakers, which enable users view available sneakers and purchase them easily from their comfort zone.",
    img: "/Nike-Dropshipping-Store.png",
    githubLink: "https://github.com/codexive-zech/Nike-Shoes-Store",
    liveLink: "https://nikesneakr.netlify.app/",
  },
  {
    id: 3,
    title: "Jobstr App",
    description:
      "Jobstr is a powerful and easy to use job tracking application system that helps users to in managing of jobs, organizing of jobs and tracking of jobs app for users.",
    img: "/jobstr.png",
    githubLink: "https://github.com/codexive-zech/jobster",
    liveLink: "https://jobstr.netlify.app/",
  },
  {
    id: 4,
    title: "Homey Soft Store",
    description:
      "Homey Soft is an E-commerce store which enable users to buy varieties of comfortable home furniture for personal use.",
    img: "/HomeySoft.png",
    githubLink: "https://github.com/codexive-zech/Homey-Soft-ecommerce",
    liveLink: "https://homeysoft.netlify.app/",
  },
  {
    id: 5,
    title: "Lilies Food App",
    description:
      "Lilies Food is a food ordering app which allows users to order for delicious meals they are craving for and have it delivered to them.",
    img: "/lilies-food.png",
    githubLink: "https://github.com/codexive-zech/Lilies-Food",
    liveLink: "https://homeysoft.netlify.app/",
  },
  {
    id: 6,
    title: "Tint and Shades Color",
    description:
      "Tints and shades generator tool is a tool that allows it's users to easily get lighter and darker variations of any color they want.",
    img: "/tint-shade-color.png",
    githubLink: "https://github.com/codexive-zech/Light-and-Dark-Color-Gen",
    liveLink: "https://liliesfood.netlify.app/",
  },
];

export const experience: Experience[] = [
  {
    id: 0,
    company: "HNG.",
    date: "October 2022 to December 2022.",
    duties: [
      "Wrote Maintainable and Reusable React UI Components utilizing Tailwind CSS for Styling.",
      "Implemented React Memoization API to prevent unnecessary rerender of functional components.",
      "Integrated a Payment Gateway (Paystack Payment UI) in other to make Online Payments Easy.",
      "Implemented Code-Splitting and Lazy Loading to split code into smaller chunks in other to improve performance.",
      "Used a Git Version Control System to track changes to code and collaborate with other developers in the team.",
    ],
  },
  {
    id: 1,
    company: "SideHustle NG.",
    date: "July 2022 to September 2022.",
    duties: [
      "Translated Figma mockup into clean and reusable React UI components.",
      "Wrote maintainable and reusable code using the latest ES6 JavaScript and React features.",
      "Built custom React UI components utilizing Styled Components, React Hooks, React Redux and Axios for REST API (GET, PATCH, POST, DELETE) ajax request.",
      "Implemented React Router for navigation and fetching dynamic user data based on the URL parameters and Query Params in a Job Tracking Platform.",
      "Managed complex state in multiple components using React Redux.",
      "Created private public routes, and Implemented user authentication in the Job Tracking Platform.",
      "Utilized local storage to persist React application state data and rehydrate Context API on site reload.",
    ],
  },
  {
    id: 2,
    company: "Zuri Team, Inc.",
    date: "March 2022 to July 2022",
    duties: [
      "Converted a Photoshop mockups into semantic HTML/CSS, utilized JavaScript to add behavior, user events and modify the DOM.",
      "Implemented Browser Fetch API request to fetch 3rd party data and use on the frontend.",
      "Used Lifecycle method to handle asynchronous request to the API.",
      "Re-created the Zuri Web Pages which include the Landing Page, the Talent Page and the Training Page.",
      "Cooperate with designers to create clean interfaces and simple, intuitive interaction and experience.",
      "Implemented Git best practices which involves utilizing pull request and code reviews.",
      "Utilized chrome debugger tool to test and fix UI frontend bugs.",
    ],
  },
  {
    id: 3,
    company: "So TechAfrica",
    date: "February 2021 to March 2022.",
    duties: [
      "Led the marketing department in a coordinate effort to hit the yearly revenue target. Used both Online and Offline strategies. Tactics: Facebook Ads, Instagram Ads and Distributorship Program",
      "Created A/B testing plans for Social Media Paid Ads (ad copy, ad creative, target audience etc) leading to an improvement in the ROI",
      "Designed and developed websites using WordPress and added more custom functionality with HTML/CSS/JS if needed.",
      "Wrote blog content with attention to SEO and keyword research that help improved the total site traffic.",
      "Studied analytics in Google Search Console in other to identify low performing keywords and query so as to implement solution that help improve performance.",
      "Studied Google Analytics in other to identify performing content and understand user journey so as to provide more content that help improved blog site traffic.",
    ],
  },
  {
    id: 4,
    company: "Setnumd Technologies",
    date: "May 2019 to October 2019",
    duties: [
      "Designed and Developed a Food Processing Website.",
      "Oversaw the Web Management of the Website to improve the User Interface which made more user comfortable to interact with.",
      "Worked closely with clients to understand their product positioning to incorporate into sales leading to client satisfaction of 99%. ",
      "Strategized, Develop and Managed Paid Digital marketing campaign across Facebook & Instagram leading to an increase in Sales.",
      "Carried out quality A/B automation testing to discover which Ad campaign optimized the most.",
    ],
  },
];
