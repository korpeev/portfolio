import React from "react";
import IconSelector from "../IconSelector/IconSelector";

const Contacts = () => {
  return (
    <section id="Contacts" className="my-10 border-t-2 border-black">
      <div className="container px-5 max-w-7xl mx-auto">
        <h1 className="text-5xl pt-5 uppercase font-bold text-center md:text-4xl">
          Contacts
        </h1>
        <div className="pt-5 h-[150px]">
          <ul className="flex h-full justify-around items-center flex-wrap sm:flex-col sm:justify-around">
            <li className="flex space-x-2 items-center">
              <a
                className="w-24 bg-slate-900 cursor-pointer text-white px-4 rounded-l-xl transition-transform hover:-translate-x-2"
                href="mailto:korpeevaslan@gmail.com"
                target="_blank">
                Email
              </a>
              <IconSelector id="gmail" />
            </li>
            <li className="flex space-x-2 items-center">
              <a
                className="w-24 bg-slate-900 cursor-pointer text-white px-4 rounded-l-xl transition-transform hover:-translate-x-2"
                href="https://github.com/korpeev"
                target="_blank">
                Github
              </a>
              <IconSelector id="github" />
            </li>
            <li className="flex space-x-2 items-center">
              <a
                className="w-24 bg-slate-900 cursor-pointer text-white px-4 rounded-l-xl transition-transform hover:-translate-x-2"
                href="https://t.me/mottyleekk"
                target="_blank">
                Telegram
              </a>
              <IconSelector id="telegram" />
            </li>
            <li className="flex space-x-2 items-center">
              <a
                href="https://instagram.com/korpeeev"
                target="_blank"
                className="w-24 bg-slate-900 cursor-pointer text-white px-4 rounded-l-xl transition-transform hover:-translate-x-2">
                Instagram
              </a>
              <IconSelector id="instagram" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
