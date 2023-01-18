import "./SecondPage.scss";

const SecondPage = () => {
  return (
    <div className="wrapperr">
      <div className="md:h-[37rem] h-[25rem] ">
        <img
          src={"../../../public/Images/coder.jpeg"}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="desc">
        <p className="md:text-5xl text-3xl">Hi, I'am Ophelia</p>
        <p className="md:text-2xl text-base   ">
          I am a certfied couples therapist who offers online counselling and
          therapy <br /> for client across the United States. I have been
          working in couples therapy <br /> for 10 years, helping people like
          you been on a path to a happier, more
          <br />
          fulfiling relationship, and life.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
