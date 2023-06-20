import Button from "../../atom/Button";
import "./ThirdSubPage.scss";

const ThirdSubPage = () => {
  return (
    <div className="free">
      <p className="text-3xl font-sans leading-9">
        I give a free consultation session to understand your needs, walk your
        through my personal approach, and ensure that we are right fit for one
        another.
      </p>
      <div className=" md:ml-[40rem] ml-[5rem] w-[10rem] mt-7 md:pb-0 pb-5">
        <Button title="Free Session" />
      </div>
    </div>
  );
};

export default ThirdSubPage;
