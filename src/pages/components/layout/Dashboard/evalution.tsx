import Image from "next/image";

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

const Evalution = () => {
  return (
    <div className="my-24">
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

      {/* Success In Action */}
      <div className="mt-20">
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
            <div className=" container-2 rounded-xl px-16 py-10 space-y-16 sm:mt-16 mt-10">
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
      {/* form */}

      <div className="container-2 rounded-xl px-16 py-10  space-y-16  sm:mt-16 sm:pt-16 gap-4">
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
