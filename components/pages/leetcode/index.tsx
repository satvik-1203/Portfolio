import Card from "#/components/common/Card";
import React from "react";
import leetcode from "data/leetcode.json";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <section className="page_first">
      <div className="leetcode_grid">
        {leetcode.map((code, index) => (
          <Card key={index} data={code} />
        ))}
      </div>
    </section>
  );
};

export default index;
