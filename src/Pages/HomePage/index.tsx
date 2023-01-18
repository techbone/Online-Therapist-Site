import "./HomePage.scss";
import FirstPage from "../../molecules/FirstPage";
import NavBar from "../../organism/NavBar";
import SecondPage from "../../molecules/SecondPage";
import ThirdPage from "../../molecules/ThirdPage";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavBar />
      <main className="main-section">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </main>
    </div>
  );
};

export default HomePage;
