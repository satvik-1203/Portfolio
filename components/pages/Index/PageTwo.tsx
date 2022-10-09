import React from "react";
import Card from "./Card";

interface Props {}

const showCases = [
  { title: "Resume", link: "/resume.pdf", newPage: true },
  { title: "Projects", link: "#projects", newPage: false },
  { title: "Contacts", link: "#contacts", newPage: false },
];

const PageTwo: React.FC<Props> = () => {
  return (
    <section className="min-h-[80vh]">
      <h2 className="">My story</h2>
      <div className="mt-8 leading-6 tracking-wide text-lg text-gray-300 flex flex-col space-y-4">
        <p>
          In grade eleven, I remember watching the movie social network inspired
          me to make a web page and start something. Immitedatly after watching
          the movie, I opened up a tutorial from youtube and clicked &apos;how
          to make a web page.&apos; First, I downloaded this weird text editor
          named bracket. Then made an HTML file. HTML was straightforward.
          However, getting introduced to CSS was a whole different thing.
          Linking CSS in HTML files itself was confusing at the time. After a
          few days, I tended to give up and never coded anything till college.
        </p>
        <p>
          In college, I first met people who knew how to code while I had no
          idea what was happening. The entire first semester was me looking at
          others writing code and copy-pasting, not understanding any
          statements, just looking at everything as syntax. Every week, for each
          lab, I used to hit up the lab tutors and show them my broken homework
          while they fixed the code for me. I don&apos;t know how long it took;
          all I could say was that it was the fewest worst times in my life.
        </p>
        <p>
          During the next semester, my professor gave the class a pop quiz, and
          surprisingly I was about to do it with no sweat while I saw others
          struggle. It was then I discovered my passion for coding. I started
          learning all the concepts the class was going over. After finishing
          all the topics, I found that data structures are fundamental in CS. I
          started grinding on them, created each data structure, and solved a
          few leetcoding problems. Simantinously, I began to read daily news
          about software engineering. React was a hot topic at the time, and the
          name caught my mind. Ever since then, I have wanted to get into
          front-end development.
        </p>
      </div>
      <section>
        <div className="leetcode_grid mt-8">
          {showCases.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PageTwo;
