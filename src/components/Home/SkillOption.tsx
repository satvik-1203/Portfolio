import React from "react";

interface Props {
  skillOption: { id: number; heading: string; list: string[] };
}

const SkillOption = ({ skillOption }: Props) => {
  const { heading, list } = skillOption;
  return (
    <section className="mt-6 sm:mt-10">
      <h2 className="text-white text-2xl sm:text-4xl">{heading}</h2>
      <div className="text-xs text-primary mt-1 sm:mt-3 sm:text-base">
        <ul className="list-inside list-disc">
          {list.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillOption;
