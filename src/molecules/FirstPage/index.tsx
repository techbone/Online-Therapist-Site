import React from "react";
import Button from "../../atom/Button";
import "./FirstPage.scss";

const FirstPage = () => {
  return (
    <div className="page--wrapper" id="home">
      <div className="desc">
        <p>
          Invest in your
          <br />
          Relationship.
          <br />
          Anywhere, Anytime.
        </p>
        <p className="text-[20px]">
          Online therapy for couples who want to grow closer.
        </p>
      </div>
      <div className="max-w-[10rem] md:ml-20 ml-6  ">
        <Button title="free session" />
      </div>
    </div>
  );
};

export default FirstPage;
