/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio_section.jpg";

const imageAltText = "Wooden coding workspace background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectListConverted = [
  {
    title: "Appointment Application",
    description:
      "An appointment scheduling app that lets users set appointments, dates, and reminders, built with React and styled using Tailwind CSS.",
    url: "https://reactjsdev24.ccbp.tech/",
  },
  {
    title: "Emoji Game",
    description:
      "A fun game featuring 12 emojis to test your memory and speed. Rearrange them as they shuffle with React and a sleek UI in Tailwind CSS.",
    url: "https://reactjsdev25.ccbp.tech/",
  },
  {
    title: "Wikipedia Search",
    description:
      "A fully functional Wikipedia search webpage built using React and Node.js, allowing users to search for information on Wikipedia.",
    url: "https://newwikipedia1.ccbp.tech/",
  },
  {
    title: "Todo List",
    description:
      "A simple to-do list application for managing daily tasks, created with HTML, JavaScript, and a clean UI using Tailwind CSS.",
    url: "https://to9.ccbp.tech/",
  },
  {
    title: "Dev Blog",
    description:
      "A developer's blog webpage displaying a list of blogs with the ability to view detailed descriptions upon clicking.",
    url: "https://reactjsdev22.ccbp.tech/blogs/1",
  },
  {
    title: "Typing Test Game",
    description:
      "A typing test game challenging users to type a random text as quickly as possible, built using React and styled with Tailwind CSS.",
    url: "https://tt2004.ccbp.tech/",
  },
  {
    title: "Destiny Search",
    description:
      "Explore top travel destinations with a stylish webpage created using React and custom CSS.",
    url: "https://reactjsdev9.ccbp.tech/",
  },
  {
    title: "Food Munch Page",
    description:
      "A responsive food retail shop page with a mouth-watering display, built using HTML, CSS, and Bootstrap.",
    url: "https://fm9.ccbp.tech/",
  },
  {
    title: "Google Career Page",
    description:
      "A responsive clone of Google's career page showcasing job opportunities, designed using HTML, CSS, and Bootstrap.",
    url: "https://gccbyvarma.ccbp.tech/",
  },
  {
    title: "Guessing Game",
    description:
      "A number guessing game challenging users to guess a number between 1 and 100 with clues and minimal attempts, built with React and styled using Tailwind CSS.",
    url: "https://gtn2.ccbp.tech/",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
