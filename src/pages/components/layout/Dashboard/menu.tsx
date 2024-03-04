import Image from "next/image";

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
  ];

  return (
    <div className="bg-menu">
      <ul
        role="list"
        className="lg:h-36 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 "
      >
        {people.map((person) => (
          <li key={person.id} className="col-span-1 flex justify-center ">
            <Image
              width={150}
              height={150}
              className=" flex-shrink-0 rounded-full"
              src={person.imageUrl}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
