import React from "react";

const NewsPage = () => {
  return (
    <div className="h-screen bg-gray-200 ">
      <h1 className="font-sans text-md font-weight-400 ">Hello Tailwind Css</h1>
      <h2 className="font-serif text-lg font-weight-bold ">
        Hello Tailwind Css
      </h2>
      <h3 className="font-mono text-2xl font-700">Hello Tailwind Css</h3>

      <ul className="mx-4 list-none">
        <li className="text-red-600">Lorem ipsum dolor sit amet.</li>
        <li className="text-lime-600 overline">Lorem ipsum dolor sit amet.</li>

        <li className="text-amber-600">Lorem, ipsum.</li>
      </ul>
      <ul className="ml-6 list-disc">
        <li className="text-orange-600">Lorem, ipsum dolor.</li>
        <li className="text-gray-700 line-through">Lorem, ipsum dolor.</li>
        <li className="text-green-600">Lorem, ipsum.</li>
      </ul>

      <ul className="ml-6 list-decimal">
        <li className="text-teal-700 underline">Lorem ipsum dolor sit amet.</li>
        <li className="text-cyan-600">Lorem, ipsum dolor.</li>
        <li className="text-blue-700">Lorem, ipsum.</li>
      </ul>

      <div className="ml-4">
        <p className=" text-black-700 font-medium">
          Lorem ipsum dolor
          <span className="underline decoration-sky-800" href="">
            sit amet consectetur adipisicing elit.
          </span>
          Esse ut laudantium corrupti
          <span className="underline decoration-pink-700">
            nobis facere est
          </span>
          repudiandae cum
          <span className="underline decoration-yellow-600">nisi, eaque</span>
          consequuntur?
        </p>

        <br />
        <p className="ml-4 text-xl">
          <span className="underline decoration-dotted">
            Lorem ipsum dolor sit amet
          </span>
          consectetur adipisicing elit.
          <span className="underline decoration-double">
            Tempore libero rem eius autem
          </span>
          consequuntur mollitia nesciunt iure
          <span className="underline decoration-dashed">
            obcaecati necessitatibus ipsum?
          </span>
        </p>
      </div>

      <h2 className=" text-2xl text-pink-600 uppercase">JavaScript</h2>
      <h4 className="text-3xl text-orange-600 lowercase">React JS</h4>
      <h5 className="text-4xl text-teal-500 capitalize">Node JS</h5>

      <p className="mt-3 text-ellipsis overflow-hidden">
        The longest word in any of the major English language dictionaries is
        pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a
        lung disease contracted from the inhalation of very fine silica
        particles, specifically from a volcano; medically, it is the same as
        silicosis.
      </p>

      <div className="mt-2 h-48 w-48  bg-violet-800 mx-auto rounded-full"></div>

      <div className="mt-3 h-12 w-12 mx-auto border-orange-400 border-4"></div>

      <p className="text-2xl text-[#2D80B9] ml-[10px] ">Javascript</p>

      <div className="text-center py-5">
        <button className="bg-red-700 text-xl text-white py-2 px-3 rounded-full hover:bg-red-900 hover:transition-colors focus:ring-2 ring-offset-2 ring-pink-500">
          Subscribe
        </button>
      </div>

     
     

      <h1 className="font-bold text-center bg-green-300  sm:bg-pink-400 md:bg-red-400 lg:bg-violet-400">
        Hello World
      </h1>

      <br /><br />

     
     {/* darkMode */}
      <div className=" text-center bg-gray-400 dark:bg-gray-900 ">
      <h2 className="text-white">Some Text Here</h2>
      </div>

    </div>
  );
};

export default NewsPage;
