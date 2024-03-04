import Menu from "../Dashboard/menu";
import AboutUs from "./aboutUs";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-container">
        <h1 className="text-7xl text-white text-center px-10 pt-60">
          Transforming Your Business Digitally With{" "}
          <span className="fc-2575FC">Innovation</span>
        </h1>
        <p className="text-lg text-white text-center px-72 pt-7">
          We help you redefine your digital experiences with cutting-edge
          technology to drive dynamic business outcomes.
        </p>
        <div className="flex justify-center pt-5">
          <a
            href="#"
            className=" bg-2575FC py-3  text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
          >
            Book a meeting
          </a>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <Menu />
      <AboutUs />
    </>
  );
};

export default DashboardPage;
