import Image from "next/image";
import Accordion from "./accordion";
import { Carousel } from 'antd';
import { Card } from 'antd';
import { useEffect, useState } from "react";

const features = [
  {
    name: "Web Design Project Title Goes Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut. sed do eiusmod tempor incididunt ut.",
    imageSrc: "/action1.svg",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
    btn: "App design",
  },
  {
    name: "Web Design Project Title Goes Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut. sed do eiusmod tempor incididunt ut.",
    imageSrc: "/action2.svg",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
    btn: "Web design",
  },
  {
    name: "Web Design Project Title Goes Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut. sed do eiusmod tempor incididunt ut.",
    imageSrc: "/action3.svg",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
    btn: "App design",
  },
];
const faqs = [
  {
    title: "What services does your agency offer?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do.",
    active: true,
  },
  {
    title: "How do I get started with your agency?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do.",
    active: false,
  },
  {
    title: "Can you provide examples of your previous work?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do.",
    active: false,
  },
  {
    title: "What is your pricing structure?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do.",
    active: false,
  },
  {
    title: "How do I get started with your agency?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do.",
    active: false,
  },
  {
    title: "What is your pricing structure?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do.",
    active: false,
  },
];

const contentStyle: React.CSSProperties = {
  height: '80vh',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'left',
  background: 'rgba(54, 77, 121, 0)',
  paddingTop: 0
};

const Evalution = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const carouselContent = [
    {
      title: "Client Spotlight 1",
      text: `Quick answers to common queries. We've curated a resourceful space
      to address your concerns. If you can't find what you're looking for,
      feel free to reach out, and well be happy to assist you further 1`
    },
    {
      title: "Client Spotlight 2",
      text: `Quick answers to common queries. We've curated a resourceful space
      to address your concerns. If you can't find what you're looking for,
      feel free to reach out, and well be happy to assist you further 2`
    },
    {
      title: "Client Spotlight 3",
      text: `Quick answers to common queries. We've curated a resourceful space
      to address your concerns. If you can't find what you're looking for,
      feel free to reach out, and well be happy to assist you further 3`
    },
    {
      title: "Client Spotlight 4",
      text: `Quick answers to common queries. We've curated a resourceful space
      to address your concerns. If you can't find what you're looking for,
      feel free to reach out, and well be happy to assist you further 4`
    },
  ];

  const cardContentOne = [
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "Joseph Watts",
      location: "UAE"
    },
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "Steve Mark",
      location: "USA"
    },
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "William Banks",
      location: "England"
    },
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "John Parker",
      location: "IND"
    },
  ];

  const cardContentTwo = [
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "Ryan Jobs",
      location: "UK"
    },
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "Mark Henry",
      location: "Canada"
    },
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "Christopher Wan",
      location: "China"
    },
    {
      quote: `“Lorem ipsum dolor sit amet consectetur. Massa in a molestie arcu turpis ipsum eget ornare faucibus.”`,
      name: "Will Wang",
      location: "USA"
    },
  ];

  const handleCarouselChange = (index: number) => {
    setCarouselIndex(index);
    setAnimate(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [carouselIndex]);

  return (
    <div className="my-24">
      <div className="background2 "></div>
      <p className="text-white text-5xl font-medium text-center md:mx-12 sm:mx-12 lg:mx-72">
        Your Digital Evolution - Driven by Our Expertise
      </p>
      <div className="flex lg:justify-center md:justify-center sm:justify-center my-7">
        <Image src="/trial.svg" alt="trail" width={400} height={209} />
      </div>

      <div className="flex  justify-center ">
        <a
          href="#"
          className="bg-2575FC  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
        >
          Activate your Free Trail
        </a>
      </div>


      <div className="mt-20">
        <div className="background2"></div>
        <p className="text-white text-5xl font-thin text-center md:mx-12 sm:mx-12 lg:mx-72">
          Success In Action
        </p>
        <p className="text-white text-sm font-thin text-center lg:px-80 pt-5">
          Explore our featured digital experience projects to witness the
          transformative impact of our work. Each project speaks volumes about
          our dedication, innovation, and the exceptional results we achieve
          together.
        </p>

        {features.map((feature) => (
          <>
            <div className="  container-3 rounded-xl px-16 py-10 space-y-16 sm:mt-16 mt-10">
              <div className="gradiant2"></div>
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 text-3xl "
              >

                <div className="mt-6 lg:col-span-9 lg:mt-0 xl:col-span-7">
                  <a
                    href="#"
                    className="bg-white fc-2575FC  py-2.5  text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
                  >
                    {feature.btn}
                  </a>
                  <h3 className="text-3xl text-white font-medium  pt-4">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm txt2 font-thin">
                    {feature.description}
                  </p>
                  <div className="flex">
                    <p className="mt-2 text-sm font-medium fc-2575FC ">
                      View Case Study
                    </p>
                    <Image
                      src="/blueArrow.svg"
                      height={13}
                      width={20}
                      alt="arrow"
                      className="mt-3 ml-3"
                    />
                  </div>
                </div>
                <div className="flex-auto lg:col-span-3 xl:col-span-5">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg ">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      height={300}
                      width={400}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="flex justify-center my-10 ">
          <a
            href="#"
            className=" bg-2575FC mb-10  py-2.5  text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
          >
            View All Case Study
          </a>
        </div>
      </div>

      {/*Client Spotlight*/}
      <div className="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 gap-10 my-20">
        <div className="col-span-3 clientCarousel z-40">
          <Carousel autoplay autoplaySpeed={3000} afterChange={handleCarouselChange}>
            {carouselContent.map((content, index) => (
              <div key={index}>
                <div style={contentStyle}>
                  <h1 className="text-5xl text-white py-10 font-medium">{content.title}</h1>
                  <p className="text-white text-xl font-thin">{content.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="background"></div>
        <div className="col-span-2 flex-col fadess">
          <Card
            bordered={false}
            className={`w-full lg:w-92 md:w-full sm:w-full mb-5 ${animate && (carouselIndex === 0 || carouselIndex === 1 || carouselIndex === 2 || carouselIndex === 3) ? "slide-in" : ""}`}
          >
            <div className="row">
              <p className="text-black text-xl font-normal">{cardContentOne[carouselIndex].quote}</p>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 mr-4">
                <Image src='https://st2.depositphotos.com/1715570/5305/i/450/depositphotos_53059317-stock-photo-close-up-portrait-of-a.jpg' alt="icon" width={60} height={60} className="rounded-full h-10 w-10" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">{cardContentOne[carouselIndex].name}</div>
                  <div className="text-sm">{cardContentOne[carouselIndex].location}</div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <h1 className="text-5xl text-grey font-medium text-gray-300">,,</h1>
              </div>
            </div>
          </Card>
          <Card
            bordered={false}
            className={`w-full lg:w-82 md:w-full sm:w-full ${animate && (carouselIndex === 0 || carouselIndex === 1 || carouselIndex === 2 || carouselIndex === 3) ? "slide-in" : ""}`}
          >
            <div className="row">
              <p className="text-black text-xl font-normal">{cardContentTwo[carouselIndex].quote}</p>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 mr-4">
                <Image src='https://st2.depositphotos.com/1715570/5305/i/450/depositphotos_53059317-stock-photo-close-up-portrait-of-a.jpg' alt="icon" width={60} height={60} className="rounded-full h-10 w-10" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">{cardContentTwo[carouselIndex].name}</div>
                  <div className="text-sm">{cardContentTwo[carouselIndex].location}</div>
                </div>
              </div>
              <div className="flex-shrink">
                <h1 className="text-5xl text-grey font-medium text-gray-300">,,</h1>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 flex md:flex-col-reverse sm:flex-col-reverse gap-10">
        <div className="col-span-2">
          <h1 className=" text-5xl text-white ">Frequently Asked Questions </h1>
          <p className="text-white">
            Quick answers to common queries. We&apos;ve curated a resourceful space
            to address your concerns. If you can&apos;t find what you&apos;re looking for,
            feel free to reach out, and we&apos;ll be happy to assist you further.
          </p>
        </div>
        <div className="background"></div>

        <div className="col-span-3 md:col-span-3 ">
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </Accordion>
            ))}
          </div>
        </div>
      </div>


      <div className="container-3 rounded-xl px-16 py-10  space-y-16  sm:mt-16 sm:pt-16 gap-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2  text-3xl ">
          <p className="text-5xl font-semibold text-white lg:w-full pt-10">
            Your journey to transformation begins now. Let’s build something
            brilliant together!
          </p>

          <form className="justify-center grid lg:ml-32 md:mt-12 sm:mt-6">
            <input
              placeholder="Full Name"
              className="bg-spl-grey lg:w-96  sm:w-80 md:w-96"
            />
            <br />
            <input
              placeholder="Email"
              className="bg-spl-grey lg:w-96  sm:w-80 md:w-96"
            />
            <br />
            <input
              placeholder="Mobile Number"
              className="bg-spl-grey lg:w-96  sm:w-80 md:w-96"
            />
            <br />
            <textarea
              placeholder="Hello there, I would like to talk about how to ..."
              className="bg-spl-grey lg:w-96  sm:w-80 md:w-96"
            />
            <a
              href="#"
              className=" bg-2575FC mb-10 mt-8 w-40  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
            >
              Talk to us Today
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Evalution;