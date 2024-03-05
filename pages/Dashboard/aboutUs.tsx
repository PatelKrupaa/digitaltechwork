import Image from "next/image";
import CountUp from "react-countup";
import TechStack from "./texhStack";
import Evalution from "./evoltion";

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

const footerData = [
  {
    id: 1,
    img: "./FooterImg1.svg",
    address: "#42, MKM Chambers, Nungambakkam, Chennai, Tamil Nadu - 600034",
  },
  {
    id: 2,
    img: "./FooterImg2.svg",
    address:
      "#L-148, 5th Main Rd, near Rajesh Jewellers, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
  },
  {
    id: 3,
    img: "./FooterImg3.svg",
    address: "#42, MKM Chambers, Nungambakkam, Chennai, Tamil Nadu - 600034",
  },
  {
    id: 4,
    img: "./FooterImg4.svg",
    address: "#16852 Coral Lane Macomb, MI UNITED STATES  – 48042",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutUs lg:px-20 md:px-8 sm:px-6 min-[320px]:px-4">
      <div className="">
        <div className="flex sm:flex-col min-[320px]:flex-col lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 min-[320px]:grid-cols-1 text-white py-24 ">
          <div className="background"></div>
          <h1 className="text-5xl lg:col-span-1  md:col-span-6 sm:col-span-6 min-[320px]:cols-span-9 ">
            About Us
          </h1>
          <p className="text-left text-xl font-normal leading-7 lg:col-span-2 md:cols-span-6 min-[320px]:cols-span-9">
            At the heart of innovation, we create digital solutions that
            transcend boundaries. We&apos; re not just a tech company; we &apos;
            re your partners in progress. From small steps to giant leaps,
            we&apos;re here to redefine your digital experience – because your
            success is our story.
          </p>
        </div>
      </div>
      <div className="grid countData lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 min-[320px]:grid-cols-2 md:gap-8 sm:gap-3 md:my-1 sm:my-1 min-[320px]:gap-3 mb-3">
        {Data?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center container-3 rounded-3xl px-8 py-20 "
            >
              <div className="text-center ">
                <CountUp
                  start={0}
                  end={item?.count}
                  duration={12}
                  className="text-white text-5xl font-bold min-[320px]:text-3xl"
                />
                <span className="fc-2575FC text-5xl font-bold ml-3 min-[320px]:text-3xl">
                  +
                </span>
              </div>
              <span className="text-white text-center lg:text-2xl font-medium leading-9 min-[320px]:text-lg">
                {" "}
                {item?.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="video lg:my-20 md:my-16 sm:my-16">
        <Image src="./video.svg" width={1720} height={400} alt="video" />
      </div>

      <div className="flex sm:flex-col min-[320px]:flex-col lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 min-[320px]:grid-cols-1 text-white py-20 ">
        <div className="background"></div>
        <h1 className="text-5xl lg:col-span-1 md:col-span-6 sm:col-span-6 min-[320px]:cols-span-9 ">
          What we do
        </h1>
        <p className="text-left reliable companion lg:px-10 lg:col-span-2 md:cols-span-6 min-[320px]:cols-span-9 ">
          We&apos;re your digital architects, utilizing advanced visualization
          tools and cutting-edge tech stack to engineer custom software and
          app solutions. Specializing in full-stack services with a focus on
          cloud and data, our journey extends from ideation to ongoing
          maintenance.
        </p>
      </div>

      <div className="grid cards lg:grid-cols-3 gap-14 sm:grid-cols-1 md:grid-cols-2">
        {Technology?.map((item) => {
          return (
            <div className="container-3 rounded-3xl px-10 py-5" key={item.icon}>
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

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-white py-20 gradiant1">
        <div className="whyweLeft">
          <h1 className="text-5xl">Why choose us?</h1>
          <p className="text-left  sm:pt-3 md:pt-3 min-[320px]:pt-2">
            Partnering with our team is like having a reliable companion on your
            development journey and beyond. We&apos;re not just a company; we
            &apos;re your dedicated allies, ensuring a personalized experience
            and unwavering support every step of the way.
          </p>
          <div className="grid lg:grid-cols-2 mt-8 md:grid-cols-2 md:mb-4 ">
            {chooseUs?.map((item) => {
              return (
                <div className="mt-5 flex items-center" key={item.id}>
                  <Image src={item?.img} alt="icon" width={46} height={46} />
                  <p className="pl-3">{item?.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="whyweRight flex justify-end">
          <Image
            src="/contactUs.svg"
            height={425}
            width={550}
            alt="contactus"
            className=" min-[320px]:pt-3 min-[320px]:flipImage md:flipImage sm:flipImage"
          />
        </div>
      </div>

      <TechStack />
      <Evalution />

      {/* Footer  */}
      <div className="pb-20">
        <div className="footerData grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-10 mt-10">
          {footerData?.map((item) => {
            return (
              <>
                <div
                  className="container-3  rounded-3xl px-10 py-5  "
                  key={item.id}
                >
                  <Image src={item.img} alt="img" height={150} width={250} />
                  <p className="text-white text-sm pt-8">{item?.address}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
