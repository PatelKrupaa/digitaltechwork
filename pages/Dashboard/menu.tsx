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
    {
      id: 6,
      imageUrl: "/menu1.svg",
    },
    {
      id: 7,
      imageUrl: "/menu2.svg",
    },
  ];


  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];


  return (
    <div className="bg-161616 z-10 overflow-x-auto">
      <ul className="lg:h-36 grid  sm:grid-cols-3 lg:grid-cols-5 min-[320px]:grid-cols-2 navbuttons lg:px-20">
        {people.map((person) => (
          <li key={person.id} className="col-span-1 flex justify-center min-[320px]:w-72 ">
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

//     <div class="nav">
//     <ul class="navbuttons">
//          <li>A lot of text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>A lot of text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//          <li>Some text1</li>
//          <li>Some text 2</li>
//          <li>Some text text</li>
//     </ul>
// </div>
  );
};

export default Menu;
