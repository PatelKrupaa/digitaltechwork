import Image from "next/image";

const TechStacks = [
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

const TechStack = () => {
  return (
    <div className="">
      <div className=" grid lg:grid-cols-3 md:grids-cols-2 sm:grids-cols-1 text-white py-12">
      <div className="background"></div>

        <h1 className=" text-5xl col-span-1">Our Tech-Stack</h1>
        <p className="text-center col-span-2 lg:px-10 md:pt-2 sm:pt-2 font-thin">
          Empowered by a cutting-edge tech stack, our solutions are crafted with
          precision and innovation. From robust backend frameworks to seamless
          frontend experiences, we leverage the latest technologies for
          unparalleled digital excellence.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 md:grids-cols-5  ">
        <div className="lg:col-span-2">
          <a
            href="#"
            className="flex items-center  bg-2575FC lg:w-96 md:w-56 sm:w-40 h-14 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-xl px-6 "
          >
            <span>01</span>
            <span className="lg:px-6 md:px-4 sm:px-3">Open Sources</span>
            <Image
              src="/arrow.svg"
              height={20}
              width={20}
              alt="arrow"
              className="lg:ml-40"
            />
          </a>

          {TechStacks.map((item) => {
            return (
              <div className="lg:flex lg:flex-1 md:flex sm:flex  mt-3">
                <a
                  href="#"
                  className="flex w-64 bg-spl-grey lg:w-96 md:w-56 sm:w-40 h-14  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-xl px-6 gap-3"
                >
                  <span>{item.id}</span>
                  <span className="lg:px-6 md:px-4 sm:px-1">{item?.title}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* tech stack animation */}
        <div className="blocks lg:col-span-3 mt-0">
          <ul className="line">
            <li>
              <Image src={"./dot.svg"} height={15} width={15} className="ml-16 mt-2"/>
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
              <Image src={"./dot.svg"} height={15} width={15}  className="ml-16 mt-2" />

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
              <Image src={"./dot.svg"} height={15} width={15}  className="ml-16 mt-2" />
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
              <Image src={"./dot.svg"} height={15} width={15}  className="ml-16 mt-2" />
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
              <Image src={"./dot.svg"} height={15} width={15}  className="ml-16 mt-2" />
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
      </div>
    </div>
  );
};

export default TechStack;
