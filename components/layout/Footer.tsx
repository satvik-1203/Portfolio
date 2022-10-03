import React from "react";

interface Props {}

// Vercel sponsorship
// Github
// linkedin
//

const Footer: React.FC<Props> = () => {
  return (
    <footer className="absolute bottom-0  py-8 left-0 right-0">
      <ul className="flex  justify-center w-full space-x-8 text-lg text-blue-700 underline">
        <li>
          <a
            href="https://github.com/satvik-1203"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-12 w-12 fill-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="mailto:satvikgsu@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/satvik-seeram/"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="none"
              className="w-10 h-10"
            >
              <path
                d="M5.59598 25H0.412946V8.30878H5.59598V25ZM3.00167 6.03194C1.34431 6.03194 0 4.65914 0 3.00174C1.18627e-08 2.20563 0.316247 1.44213 0.87917 0.87919C1.44209 0.316254 2.20558 0 3.00167 0C3.79777 0 4.56125 0.316254 5.12418 0.87919C5.6871 1.44213 6.00335 2.20563 6.00335 3.00174C6.00335 4.65914 4.65848 6.03194 3.00167 6.03194ZM24.9944 25H19.8225V16.8748C19.8225 14.9384 19.7835 12.4551 17.1278 12.4551C14.433 12.4551 14.0201 14.5589 14.0201 16.7353V25H8.84263V8.30878H13.8136V10.5856H13.8862C14.5781 9.2742 16.2684 7.89024 18.7902 7.89024C24.0357 7.89024 25 11.3446 25 15.8313V25H24.9944Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
