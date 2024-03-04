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
      <div className=" grid grid-cols-2 text-white py-20">
        <h1 className=" text-5xl">Our Tech Stack</h1>
        <p className="text-center px-10">
          Empowered by a cutting-edge tech stack, our solutions are crafted with
          precision and innovation. From robust backend frameworks to seamless
          frontend experiences, we leverage the latest technologies for
          unparalleled digital excellence.
        </p>
      </div>

      <div className="lg:flex lg:flex-1 md:flex sm:flex w-fit">
        <a
          href="#"
          className="flex justify-between bg-2575FC  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-xl px-6 gap-3"
        >
          <span>01</span>
          <span>Open Sources</span>
          <Image
            src="/arrow.svg"
            height={20}
            width={20}
            alt="arrow"
            className="ml-4 mt-1"
          />
        </a>
      </div>

      {TechStacks.map((item) => {
        return (
          <div className="lg:flex lg:flex-1 md:flex sm:flex md:w-52 mt-3">
            <a
              href="#"
              className="flex w-64 bg-spl-grey  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-xl px-6 gap-3"
            >
              <span>{item.id}</span>
              <span>{item?.title}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
