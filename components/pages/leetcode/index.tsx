import Card from "#/components/common/Card";
import React from "react";
import leetcode from "data/leetcode.json";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="">
      <div className="leetcode_grid">
        {leetcode.map((code, index) => (
          <Card key={index} data={code} />
        ))}
      </div>
    </div>
  );
};

export default index;
