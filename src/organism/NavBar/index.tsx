import { useState } from "react";

import "./NavBar.scss";
import { FaTimes } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import Button from "../../atom/Button";

const NavBar = () => {
  const tabs = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Contact", link: "#contact" },
  ];
  const [isMobileTabOpen, setIsMobileTabOpen] = useState(false);
  const handleMobileTabSwitch = () => {
    setIsMobileTabOpen((prev) => !prev);
  };
  return (
    <div className="NavBar ">
      <div className="nav-wrapper">
        <a href="#" className="logo">
          Ophelia
        </a>

        <div className="tabs">
          {tabs.map((tab, index) => (
            <a key={index} className="tab" href={tab.link}>
              {tab.title}
            </a>
          ))}
          <div className="">
            <Button title="free session" />
            <FaAlignJustify className="menu" onClick={handleMobileTabSwitch} />
          </div>
        </div>

        <div
          className={`mobile ${isMobileTabOpen ? "right-0" : "-right-[150%]"}`}
        >
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-between">
              <p className="text-white">MARRAM</p>
              <FaTimes
                className="cancel"
                onClick={() => setIsMobileTabOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-y-6 items-center mt-5">
              {tabs.map((tab, index) => (
                <a
                  key={index}
                  className="tabb"
                  onClick={handleMobileTabSwitch}
                  href={tab.link}
                >
                  {tab.title}
                </a>
              ))}
              <div className="flex flex-col text-center text-white">
                <i>Connect with us</i>
                <i>hello @ marrammontauk . com</i>
              </div>
              <div className="flex">
                <div>{/* <Phone /> */}</div>
                <div>{/* <Locations /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
