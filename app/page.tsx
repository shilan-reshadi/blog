import { BsSearch } from "react-icons/bs";
import { CgArrowDownR } from "react-icons/cg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#2FA4E7] w-full h-[6vh] text-white sticky z-50 flex top-0 right-0 left-0 items-center pt-2 pr-4 pb-2 pl-4 float-none">
        <div className="flex flex-row justify-between items-center gap-10 flex-nowrap float-none max-w-[1140px] w-full mr-auto ml-auto pl-4 pr-4 text-left">
          <a className="inline-block text-[#fff] text-xl whitespace-nowrap mr-4 pt-[3125rem] pb-[3125rem]">
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
      <div className="max-w-[1140px] w-full min-h-screen mt-5 ml-auto mr-auto pl-[15px] pr-[15px]">
        <div className="flex mr-[-15px] ml-[-15px] text-left flex-wrap flex-col">
          <div className="relative max-w-[25%] w-full min-h-[1px] pr-4 pl-4 flex-grow-0 flex-shrink-0 basis-[25%]">
            <div className="top-[76px] sticky ">
              <div>
                <button className="block md:hidden">
                  <CgArrowDownR size={30} color="#2FA4E7" />
                </button>
              </div>
              <div className="md:flex relative bg-[#e9ecef] border border-[rgba(0,0,0,0.125)] rounded-sm m-w-[0px] md:flex-col items-center border-solid hidden">
                <ul className="pt-[10px] pb-[10px] rounded-2xl w-full mt-0 mb-0 list-none">
                  <li className="text-left mt-3 ">
                    <a
                      
                      className="font-bold pb-[5px] pt-[5px] pr-[20px] pl-[20px] text-[1rem] text-[#2FA4E7]"
                    >
                      Education
                    </a>
                  </li>
                  <li className="text-left mt-3">
                    <a
                    
                      className="font-bold pb-[5px] pt-[5px] pr-[20px] pl-[20px] text-[1rem] text-[#2FA4E7]"
                    >
                      Teaching
                    </a>
                  </li>
                  <li className="text-left mt-3">
                    <a
                     
                      className="font-bold pb-[5px] pt-[5px] pr-[20px] pl-[20px] text-[1rem] text-[#2FA4E7]"
                    >
                      Research
                    </a>
                  </li>
                  <li className="text-left mt-3">
                    <a
                   
                      className="font-bold pb-[5px] pt-[5px] pr-[20px] pl-[20px] text-[1rem] text-[#2FA4E7]"
                    >
                      Ph.D. Students
                    </a>
                  </li>
                  <li className="text-left mt-3">
                    <a
                   
                      className="font-bold pb-[5px] pt-[5px] pr-[20px] pl-[20px] text-[1rem] text-[#2FA4E7]"
                    >
                      M.Sc. Students
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-[75%] relative w-full min-h-[1px] pr-[15px] pl-[15px] text-left block text-base text-[#495057]">
            <h3 className="text-2xl mb-2 text-[#444] mt-0">Shilan Reshadi</h3>
            <p className="mt-0 mb-4">
              <strong>Teaching Assistant</strong>
              <br />
              <strong>Azad University, Tabriz Branch</strong>
              <br />
              {/* <img className="float mt-[10px] mb-0 ml-0 mr-[10px] max-w-[100%] p-[4px] rounded" /> */}
            </p>
            <div className="m-0">
              I am an assistant professor in the Department of Electrical
              Engineering, at Sharif University of Technology, IRAN. I joined
              SUT in 2016. I received my Ph.D. in Electrical Engineering from
              Sharif University of Technology, in co-tutelle with University of
              Rennes 1, in 2014. I received my B.Sc. and M.Sc. in Electrical
              Engineering from Sharif University of Technology, in 2006 and 2008
              repectively. My research interests focus on biomedical signal
              processing, especially EEG signal processing.
            </div>
            <p className="">
              <br />
            </p>
            <h2 className="text-3xl text-[#444] mb-2 mt-0">Education</h2>
            <ul className="mt-0 mb-[1rem]">
              <li>
                <strong>PH .D.</strong>
                in Computer Engineering, Islamic Azad University, Tabriz Branch,
                IRAN 2023
                <ul className="mb-0 mt-0">
                  <li>Major: </li>
                </ul>
              </li>
              <li>
                <strong>M. Sc.</strong>
                in Mechatronics Engineering, Faculty of Mechanical Engineering,
                Islamic Azad University, Tabriz Branch, IRAN 2014-2012
                <ul className="mb-0 mt-0">
                  <li>Major: </li>
                </ul>
              </li>
              <li>
                <strong>B. Sc.</strong>
                in Computer Engineering, Urmia University of Science and
                Technology, IRAN 2009-2004
                <ul className="mb-0 mt-0">
                  <li>Major: Software Engineering</li>
                </ul>
              </li>
            </ul>
            <p className="mt-0 mb-4">
              <br />
            </p>
            <h2 className="text-[#444] text-3xl">Teaching</h2>
            <ul className="mt-0 mb-4">
              <li>
                <p>Compiler Design (1397-2, 1399-1, 1400-1, 1401-1, 1402-1)</p>
              </li>
              <li>
                <p>
                  Operating Systems (1397-2, 1399-1, 1400-1, 1401-1, 1402-1)
                </p>
              </li>
              <li>
                <p>
                  Programming in C, C++, PhP (1397-2, 1399-1, 1400-1, 1401-1,
                  1402-1)
                </p>
              </li>
              <li>
                <p>
                  Signals & Systems (1397-2, 1399-1, 1400-1, 1401-1, 1402-1)
                </p>
              </li>
              <li>
                <p>
                  Artificial Intelligence (1397-2, 1399-1, 1400-1, 1401-1,
                  1402-1)
                </p>
              </li>
            </ul>
            <p className="mt-0 mb-4">
              <br />
            </p>
            <h2 className="text-[#444] text-3xl">Research</h2>
            <ol className="mt-0 mb-4">
              <li>
                <p className="mt-0 mb-4">Image Processing</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Machine Learning</p>
              </li>
            </ol>
            <p className="mt-0 mb-4">
              <br />
            </p>
            {/* <h2 className="text-[#444] text-3xl">M.Sc. Students</h2>
            <ol className="mt-0 mb-4">
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
              <li>
                <p className="mt-0 mb-4">Mohammad JALILPOUR (Graduated)</p>
              </li>
            </ol> */}
          </div>
        </div>
      </div>
      <div className="block text-center pr-[15px] pl-[15px] min-h-[1px] mt-8 relative w-full mb-3">
        <hr className="text-center border-0 mb-4 mt-4 border-t-[1px] border-solid border-slate-500 overflow-visible h-0" />
        <p>Footer</p>
      </div>
    </div>
  );
}
