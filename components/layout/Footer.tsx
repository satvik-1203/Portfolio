import React from "react";

interface Props {}

// Vercel sponsorship
// Github
// linkedin
//

const Footer: React.FC<Props> = () => {
  return (
    <footer id="contacts" className="absolute bottom-0  py-8 left-0 right-0">
      <ul className="flex  justify-center w-full space-x-8 text-lg text-blue-700 underline">
        <li>
          <a
            href="https://github.com/satvik-1203"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="mailto:satvikgsu@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            satvikgsu@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/satvik-seeram/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
