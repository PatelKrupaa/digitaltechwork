import Image from "next/image";
import $ from "jquery";
import { useState, useEffect } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const TechStacks = [
  {
    id: "01",
    title: "Open Sources",
  },
  {
    id: "02",
    title: "Mobility",
  },
  {
    id: "03",
    title: "UI UX Design",
  },
  {
    id: "04",
    title: "Testing",
  },
  {
    id: "05",
    title: "Hosting",
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src="/downArrow.svg"
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full bg-gray p-4 text-left hover:bg-gray ${
          isEnter && "bg-2575FC"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const TechStack = () => {
  const [width, setWidth] = useState(0);
  console.log(width);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    $(document).ready(function () {
      $(".nav01").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
      $(".openSourcesContent").addClass("active");
      $(".MobilityContent").removeClass("active");
      $(".UIUXDesginContent").removeClass("active");
      $(".nav01").click(function () {
        $(".nav01").addClass("active");
        $(".openSourcesContent").addClass("active");
        $(".nav02").removeClass("active");
        $(".nav03").removeClass("active");
        $(".UIUXDesign").removeClass("active");
        $(".MobilityContent").removeClass("active");
      });
      $(".nav02").click(function () {
        $(".nav02").addClass("active");
        $(".MobilityContent").addClass("active");
        $(".nav01").removeClass("active");
        $(".nav03").removeClass("active");
        $(".UIUXDesign").removeClass("active");
        $(".openSourcesContent").removeClass("active");
      });
      $(".nav03").click(function () {
        $(".nav03").addClass("active");
        $(".UIUXDesign").addClass("active");
        $(".nav01").removeClass("active");
        $(".nav02").removeClass("active");
        $(".openSourcesContent").removeClass("active");
        $(".MobilityContent").removeClass("active");
      });
    });

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [width]);

  return (
    <div className="">
      {width > 1021 && (
        <>
          <div className=" grid lg:grid-cols-3 md:grids-cols-2 sm:grids-cols-1 text-white py-12">
            <div className="background"></div>

            <h1 className=" text-5xl col-span-1">Our Tech-Stack</h1>
            <p className="text-left col-span-2 lg:px-10 md:pt-2 sm:pt-2 font-thin">
              Empowered by a cutting-edge tech stack, our solutions are crafted
              with precision and innovation. From robust backend frameworks to
              seamless frontend experiences, we leverage the latest technologies
              for unparalleled digital excellence.
            </p>
          </div>

          <div className="lg:flex md:block justify-between">
            <div className="block navmenuTechStack">
              {TechStacks.map((item) => {
                return (
                  <div className={`nav${item.id} block mt-3`} key={item.id}>
                    <a
                      href="javascript:void(0)"
                      className={`navTechStack${item.id} bg-spl-grey flex justify-between w-55 lg:w-60 md:w sm:w-55 h-14 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-xl px-6 gap-3 items-center`}
                    >
                      <span>{item.id}</span>
                      <span className="lg:px-4 md:px-4 sm:px-1">
                        {item?.title}
                      </span>
                      <Image
                        src="/arrow.svg"
                        height={20}
                        width={20}
                        alt="arrow"
                        className="techstackimg"
                      />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* tech stack animation */}

            <div className="openSourcesContent block lg:col-span-3 mt-0 lg:mr-28 text-white text-center">
              <ul className={`line`}>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Languages</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />

                  <p>Frameworks</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Platforms</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Servers</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Database</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="MobilityContent block lg:col-span-3 mt-0 mr-28 text-white text-center">
              <ul className={`line`}>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Mobility</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />

                  <p>abc</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>abc</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Servers</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Database</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="UIUXDesign block lg:col-span-3 mt-0 mr-28 text-white text-center">
              <ul className={`line`}>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Database</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>UI-UX design</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />

                  <p>Photoshop</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>24/7 Service</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
                <li>
                  <Image
                    src={"./dot.svg"}
                    height={15}
                    width={15}
                    className="ml-16 mt-2"
                    alt=""
                  />
                  <p>Servers</p>
                  <div className="container2">
                    <div className="card">
                      <Image src="./tech1.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech2.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech3.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech4.svg" alt="1" height={60} width={90} />
                    </div>
                    <div className="card">
                      <Image src="./tech5.svg" alt="1" height={60} width={90} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {width <= 1020 && (
        <div className="mx-2 my-4 border-t text-white">
          {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
          <Accordion transition transitionTimeout={200}>
            <AccordionItem
              header="01 Open Sources"
              className="bg-dark text-white"
              initialEntered
            >
              <div className="techimg">
                <Image
                  src="/techStackImgh.png"
                  height="250"
                  width="250"
                  alt="image"
                />
              </div>
            </AccordionItem>

            <AccordionItem className="bg-dark text-white" header="02 Mobility">
              <div className="techimg d-flex text-center">
                <Image
                  src="/techStackImgh.png"
                  height="250"
                  width="250"
                  alt="image"
                />
              </div>
            </AccordionItem>

            <AccordionItem
              className="bg-dark text-white"
              header="03 UI-UX Design"
            >
              <div className="techimg">
                <Image
                  src="/techStackImgh.png"
                  height="250"
                  width="250"
                  alt="image"
                />
              </div>
            </AccordionItem>

            <AccordionItem className="bg-dark text-white" header="04 Testing">
              <div className="techimg">
                <Image
                  src="/techStackImgh.png"
                  height="250"
                  width="250"
                  alt="image"
                />
              </div>
            </AccordionItem>

            <AccordionItem header="05 Hosting">
              <div className="techimg">
                <Image
                  src="/techStackImgh.png"
                  height="250"
                  width="250"
                  alt="image"
                />
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default TechStack;
