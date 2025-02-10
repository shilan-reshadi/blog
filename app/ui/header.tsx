import Image from "next/image"
import { BsSearch } from "react-icons/bs"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"

export const Header = () => {
    return (
        <div className="bg-[#2FA4E7] w-full h-[6vh] text-white sticky z-50 flex top-0 right-0 left-0 items-center pt-2 pr-4 pb-2 pl-4 float-none">
        <div className="flex flex-row justify-between items-center gap-10 flex-nowrap float-none max-w-[1140px] w-full mr-auto ml-auto pl-4 pr-4 text-left">
          <a className="inline-block text-[#fff] text-xl whitespace-nowrap mr-4 pt-[0.3125rem] pb-[0.3125rem]">
            Shilan Reshadi
          </a>
          <button className="pt-1 pb-1 pr-3 pl-3 overflow-visible block md:hidden mb-2">
            <span className="inline-block w-[1.5rem] h-[1.5rem] align-middle">
              <RxHamburgerMenu size={30} />
            </span>
          </button>
          <div className="md:flex flex-row basis-auto flex-grow items-center hidden">
            <ul className="flex flex-row list-none mb-0 pl-0 flex-wrap mt-0 gap-3">
              <li>Home</li>
              <li>Publications</li>
              <li>Contact me</li>
            </ul>
            <ul className="flex ml-auto mb-0 pl-0 flex-wrap mt-0">
              <li className="flex flex-row justify-center align-middle items-center justify-items-center gap-2">
                <BsSearch />
                Search
              </li>
              <li className="flex flex-row justify-center align-middle items-center justify-items-center gap-2 ml-2">
                <FaArrowLeft />
                Previous
              </li>
              <li className="flex flex-row justify-center align-middle items-center justify-items-center gap-2 ml-2">
                Next
                <FaArrowRight />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}