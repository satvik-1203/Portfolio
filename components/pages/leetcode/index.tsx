import Card from "#/components/common/Card";
import Search from "#/components/common/Search";
import ICard from "#/interface/ICard";
import React, { useState } from "react";

interface Props {
  questions: ICard[];
}

const index: React.FC<Props> = ({ questions }) => {
  // console.log(questions[0]);

  const [stateQuestions, setQuestions] = useState(questions);

  return (
    <section className="page_first">
      <h1>Leetcode</h1>
      <div>
        <Search
          data={questions}
          setData={setQuestions}
          keys={Object.keys(questions[0])}
        />
      </div>
      <div className="leetcode_grid mt-8">
        {stateQuestions.map((code, index) => (
          <Card key={index} data={code} />
        ))}
      </div>
    </section>
  );
};

export default index;
