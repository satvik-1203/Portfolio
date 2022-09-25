import Card from "#/components/common/Card";
import ICard from "#/interface/ICard";
import React from "react";

interface Props {
  questions: ICard[];
}

const index: React.FC<Props> = ({ questions }) => {
  // console.log(questions[0]);
  return (
    <section className="page_first">
      <h1>Leetcode</h1>
      <div className="leetcode_grid mt-8">
        {questions.map((code, index) => (
          <Card key={index} data={code} />
        ))}
      </div>
    </section>
  );
};

export default index;
