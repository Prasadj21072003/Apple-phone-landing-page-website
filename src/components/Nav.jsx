import { appleImg, searchImg, bagImg } from "../utils/index";
import { navLists } from "../constants/index";
import { memo } from "react";

const Nav = memo(() => {
  return (
    <div className="w-full h-full p-[1.25rem] sm:px-[2.5rem] flex justify-between items-center ">
      <nav className="flex w-full max-w-">
        <img src={appleImg} alt="" width={14} height={18} />
        <div className="flex flex-1 justify-center items-center max-sm:hidden ">
          {navLists.map((n, i) => (
            <div
              className="text-gray hover:text-white px-[1.25rem] cursor-pointer transition-all text-[1rem]"
              key={i}
            >
              {n}
            </div>
          ))}
        </div>
        <div className="flex  justify-center items-center  w-fit gap-[1.25rem]  max-sm:flex-1 max-sm:justify-end">
          <img
            src={searchImg}
            alt=""
            width={14}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt=""
            width={14}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
});

export default Nav;
