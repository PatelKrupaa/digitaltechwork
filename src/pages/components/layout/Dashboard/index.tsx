import { useState } from "react";
import Menu from "../Dashboard/menu";
import FooterPage from "../footer";
import AboutUs from "./aboutUs";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
const navigation = [
  { name: "Services", href: "#" },
  { name: "Niche Technologies", href: "#" },
  { name: "Industries", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Company", href: "#" },
];

const DashboardPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-container lg:pb-36 sm:pb-32 md:pb-40">
        {/* Header added  */}

        <header className="">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between py-6 "
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className=""
                  src="/mainLogo.svg"
                  alt=""
                  height={58}
                  width={170}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Image
                  src="./collapsed.svg"
                  height={24}
                  width={24}
                  alt="collapsed"
                />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold leading-6 text-white text-lg font-normal"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
              <a
                href="#"
                className="bg-2575FC  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
              >
                Talk to us
              </a>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
                    src="/mainLogo.svg"
                    alt=""
                    height={100}
                    width={250}
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Image
                    src="./collapsed.svg"
                    height={24}
                    width={24}
                    alt="collapsed"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Talk to us
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* Header ends */}
        <h1 className="text-7xl text-white text-center px-10 pt-60">
          Transforming Your Business Digitally With{" "}
          <span className="fc-2575FC">Innovation</span>
        </h1>
        <p className="text-md font-thin text-white text-center lg:px-72 pt-7 md:px-0 sm:px-0 ">
          We help you redefine your digital experiences with cutting-edge
          technology to drive dynamic business outcomes.
        </p>
        <div className="flex justify-center py-5">
          <a
            href="#"
            className=" bg-2575FC py-3  text-sm font-semibold text-white shadow-sm hover:bg-2575FC focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-3xl px-6"
          >
            Book a meeting
          </a>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <Menu />
      <AboutUs />
      <FooterPage />
    </>
  );
};

export default DashboardPage;
