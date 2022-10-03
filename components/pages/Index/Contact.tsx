import React from "react";

interface Props {}

const contact: Record<string, string> = {
  Discord: "https://discord.gg/C8TN8fNqjn",
  Github: "https://github.com/satvik-1203",
  "satvikgsu@gmail.com": "mailto:satvikgsu@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/satvik-seeram/",
};

const Contact: React.FC<Props> = () => {
  return (
    <div className="min-h-[80vh]">
      <h2>Contacts</h2>
      <div className="text-gray-300 mt-8">
        <p>
          <ul className="w-fit ml-4">
            {Object.keys(contact).map((el, index) => (
              <li key={index} className="my-2 w-full">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className=" px-4 hover:text-white py-2 border-2 border-transparent hover:border-purple-700 rounded transition-all duration-300 w-full inline-block"
                  href={contact[el]}
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Contact;
