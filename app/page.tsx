import { CgArrowDownR } from "react-icons/cg";
import { Header } from "./ui/header";
import { Footer } from "./ui/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="max-w-[1140px] w-full min-h-screen mt-5 ml-auto mr-auto pl-[15px] pr-[15px]">
        <div className="flex mr-[-15px] ml-[-15px] text-left flex-wrap flex-row">
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
              Shilan Reshadi is a dedicated Teaching Assistant at Azad University, Tabriz Branch, with a robust academic background in Computer Engineering and Mechatronics. She earned her Ph.D. in Computer Engineering from Islamic Azad University, Tabriz Branch, in 2023, following her M.Sc. in Mechatronics Engineering and a B.Sc. in Computer Engineering (Software) from prestigious institutions in Iran. Shilan has extensive teaching experience, having lectured on a range of subjects, including Compiler Design, Operating Systems, Programming (C, C++, PHP), Signals & Systems, and Artificial Intelligence across multiple academic years. Her research interests focus on Image Processing and Machine Learning, where she combines her technical expertise with innovative approaches to address complex computational problems.
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
            <h2 className="text-[#444] text-3xl mb-4">Teaching</h2>
            <ul className="mt-0 mb-4">
              <li className="m-4">
                <p>1 - Compiler Design</p>
              </li>
              <li className="m-4">
                <p>
                  2 -  Operating Systems
                </p>
              </li>
              <li className="m-4">
                <p>
                  3 - Programming in C, C++, PhP
                </p>
              </li>
              <li className="m-4">
                <p>
                  4 - Signals & Systems
                </p>
              </li>
              <li className="m-4">
                <p>
                  5 - Artificial Intelligence
                </p>
              </li>
            </ul>
            <p className="mt-0 mb-4">
              <br />
            </p>
            <h2 className="text-[#444] text-3xl">Research</h2>
            <ol className="mt-0 mb-4">
              <li className="m-4">
                <p className="mt-0 mb-4">Image Processing</p>
              </li>
              <li className="m-4">
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
     <Footer />
    </div>
  );
}
