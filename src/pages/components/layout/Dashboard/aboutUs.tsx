import Image from "next/image";
import CountUp from "react-countup";
import TechStack from "./techStack";
import Evalution from "./evalution";

const Data = [
  {
    id: 1,
    count: 10,
    name: "Years of experience",
  },
  {
    id: 1,
    count: 25,
    name: "Tech enthusiasts",
  },
  {
    id: 1,
    count: 55,
    name: "Projects shipped",
  },
  {
    id: 1,
    count: 100,
    name: "Years of experience",
  },
];

const Technology = [
  {
    id: 1,
    title: "UI UX Design",
    discription:
      "Elevateuser experiences with our UI/UX services, where seamless design meets intuitivefunctionality. We transform digital interactions into engaging journeys,ensuring your audience enjoys every click.",
    icon: "/icon1.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    discription:
      "Redefine user experiences, transformideas into interactive and cutting-edge digital solutions. From conceptualbrilliance to flawless execution, our mobile app development services excel inbringing your vision to life.",
    icon: "/icon2.svg",
  },
  {
    id: 3,
    title: "Full Stack Engineering",
    discription:
      "Experience end-to-endexcellence with our full-stack engineering services. From frontend aestheticsto backend robustness, we craft comprehensive solutions that drive digitalsuccess. integrating technology and innovation for an unparalleled projectsuccess.",
    icon: "/icon3.svg",
  },
  {
    id: 4,
    title: "CMS Development",
    discription:
      "Empower your content management with our CMSdevelopment services. Streamline content creation, management &distribution with our custom solution. From intuitive interfaces to scalablearchitecture, we redefine your digital presence for dynamic and efficient online impact.",
    icon: "/icon4.svg",
  },
  {
    id: 5,
    title: "DevOps",
    discription:
      "Optimize your development pipeline and experienceaccelerated delivery, seamless collaboration, and heightened efficiency withour DevOps services. Elevate your projects with automated workflows and ensure afaster path to deployment.",
    icon: "/icon5.svg",
  },
  {
    id: 6,
    title: "IOT",
    discription:
      "Transform ideas into connected realities with our seamless IoT solutions. We connect devices intelligently, reshaping your environment for enhanced living and efficiency. Explore the possibilities of a connected world with our IoT solutions.",
    icon: "/icon6.svg",
  },
];

const chooseUs = [
  {
    id: 1,
    img: "/icon7.svg",
    title: "Cost-efficient solutions",
  },
  {
    id: 2,
    img: "/icon8.svg",
    title: "Strategic partnership",
  },
  {
    id: 3,
    img: "/icon9.svg",
    title: "Time-bound deliveries",
  },
  {
    id: 4,
    img: "/icon10.svg",
    title: "Commitment to excellence",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutUs px-20">
      <div className=" grid grid-cols-2 text-white py-20">
        <h1 className=" text-5xl">About Us</h1>
        <p className="text-center px-10">
          At the heart of innovation, we create digital solutions that transcend
          boundaries. We `&apos` re not just a tech company we `&apos` re your partners in
          progress. From small steps to giant leaps, we `&apos` re here to redefine your
          digital experience – because your success is our story.
        </p>
      </div>
      <div className="flex gap-14">
        {Data?.map((item) => {
          return (
            <div
              key={item.count}
              className="container-2 w-52 h-36 rounded-3xl px-10 py-5"
            >
              <div className="text-center">
                <CountUp
                  start={0}
                  end={item?.count}
                  duration={12}
                  className="text-white text-4xl"
                />
                <span className="fc-2575FC text-4xl ">+</span>
              </div>
              <span className="text-white text-center text-sm">
                {" "}
                {item?.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-2 text-white py-20">
        <h1 className=" text-5xl">What we do</h1>
        <p className="text-center px-10">
          We`&apos`re your digital architects, utilizing advanced visualization tools
          and cutting-edge tech stack to engineer custom software and
          app solutions. Specializing in full-stack services with a focus on
          cloud and data, our journey extends from ideation to ongoing
          maintenance.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-14">
        {Technology?.map((item) => {
          return (
            <div key={item?.id} className="container-2 rounded-3xl px-10 py-5">
              <Image
                width={56}
                height={56}
                className=" flex-shrink-0 rounded-full"
                src={item?.icon}
                alt=""
              />
              <div className="text-white text-xl pb-3 mt-8">
                <p>{item?.title}</p>
              </div>
              <span className="text-white text-sm"> {item?.discription}</span>
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-2 text-white py-20">
        <div>
          <h1 className=" text-5xl">Why choose us?</h1>
          <p className="text-center px-10">
            Partnering with our team is like having a reliable companion on your
            development journey and beyond. We`&apos`re not just a company; we`&apos`re your
            dedicated allies, ensuring a personalized experience and unwavering
            support every step of the way.
          </p>
          {chooseUs?.map((item) => {
            return (
              <div key={item.id}>
                <Image src={item?.img} alt="icon" width={46} height={46} />
                <p>{item?.title}</p>
              </div>
            );
          })}
        </div>
        <div>
          <Image
            src="/contactUs.svg"
            height={425}
            width={550}
            alt="contactus"
          />
        </div>
      </div>

      <TechStack />
      <Evalution />
    </div>
  );
};

export default AboutUs;
