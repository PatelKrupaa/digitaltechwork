import Image from "next/image";
import { Carousel } from "antd";

const Menu = () => {
  const people = [
    {
      id: 1,
      imageUrl: "/menu1.svg",
    },
    {
      id: 2,
      imageUrl: "/menu2.svg",
    },
    {
      id: 3,
      imageUrl: "/menu3.svg",
    },
    {
      id: 4,
      imageUrl: "/menu4.svg",
    },
    {
      id: 5,
      imageUrl: "/menu5.svg",
    },
    {
      id: 6,
      imageUrl: "/menu1.svg",
    },
    {
      id: 7,
      imageUrl: "/menu2.svg",
    },
  ];

  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="bg-161616 z-10 overflow-x-auto lg:pl-10">
      <Carousel autoplay slidesToShow={5} autoplaySpeed={2000} dots={false}>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu1.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu2.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu3.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu4.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu5.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu1.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu2.svg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Image
            width={150}
            height={150}
            className=" flex-shrink-0 rounded-full "
            src="/menu3.svg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Menu;
