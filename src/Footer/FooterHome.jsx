import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterHome = () => {
  return (
    <Footer container className="bg-gray-200  rounded-none shadow-none mt-20 py-10 w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div>
            <Footer.Brand
              href="/"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="TravelEase"
            />
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              Explore, Book & Travel Better with our tour packages and expert guides.
            </p>
          </div>

          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Support" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Help Center</Footer.Link>
              <Footer.Link href="#">Safety Info</Footer.Link>
              <Footer.Link href="#">Cancellation</Footer.Link>
              <Footer.Link href="#">Payment Options</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
              <Footer.Link href="#">Cookies</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <Footer.Divider className="my-8" />

        <div className="sm:flex sm:items-center sm:justify-between px-4">
          <Footer.Copyright
            href="#"
            by="TravelEase™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 sm:mt-0 flex space-x-5 text-gray-500 dark:text-gray-400">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterHome;
