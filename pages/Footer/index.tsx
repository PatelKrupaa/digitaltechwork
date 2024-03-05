import Image from "next/image";

const navigation = {
  solutions: [
    { name: "About us", href: "#" },
    { name: "Engagement Model", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact us", href: "#" },
  ],
  support: [
    { name: "UI/UX Design", href: "#" },
    { name: "Mobile App Development", href: "#" },
    { name: "Web App Development", href: "#" },
    { name: "Low Code Development", href: "#" },
    { name: "Full Stack Engineering", href: "#" },
    { name: "More...", href: "#" },
  ],
  company: [
    { name: "Healthcare", href: "#" },
    { name: "Banking", href: "#" },
    { name: "Travel", href: "#" },
    { name: "Finance", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "More....", href: "#" },
  ],
  legal: [
    { name: "+1 386 977 9083", href: "#", icon: "/phone.svg" },
    { name: "+1 386 977 9083", href: "#", icon: "/phone.svg" },
    { name: "info@digitaltechworks.com", href: "#", icon: "/email.svg" },
  ],
};

const FooterPage = () => {
  return (
    <>
      <div className="bg-footer lg:px-20 pt-24 sm:px-10 md:px-10 min-[320px]:px-10">
        <Image src="/mainLogo.svg" width={200} height={60} alt="logo" />

        <footer className="" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className=" max-w-7xl  pb-8 pt-16 sm:pt-16">
            <div className="xl:grid xl:grid-cols-2 xl:gap-8">
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-xl font-semibold leading-4 text-white">
                      Company
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {navigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-xl font-semibold leading-4 text-white">
                      Services
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-xl font-semibold leading-4 text-white">
                      Industries
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {navigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-xl font-semibold leading-4 text-white">
                      Contact
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {navigation.legal.map((item) => (
                        <>
                          <div className="flex">
                            <Image
                              src={item.icon}
                              alt="icon"
                              height={18}
                              width={18}
                            />
                            <li
                              key={item.name}
                              className="pl-3 overflow-hidden"
                            >
                              <a
                                href={item.href}
                                className="text-sm leading-6 text-gray-300 hover:text-white"
                              >
                                {item.name}
                              </a>
                            </li>
                          </div>
                        </>
                      ))}
                      <li className="">
                        <div className="flex gap-10">
                          <Image
                            src="./facebook.svg"
                            alt="icon"
                            height={22}
                            width={22}
                          />
                          <Image
                            src="./x.svg"
                            alt="icon"
                            height={22}
                            width={22}
                          />
                          <Image
                            src="./linkdin.svg"
                            alt="icon"
                            height={22}
                            width={22}
                          />
                          <Image
                            src="./instagram.svg"
                            alt="icon"
                            height={22}
                            width={22}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="py-4  bg-footer-2">
        <p className="text-md leading-5 text-gray-400 text-center">
          ©2024 Digital Techworks Interactive Solutions Pvt Ltd All Rights
          Reserved.
        </p>
      </div>
    </>
  );
};

export default FooterPage;
