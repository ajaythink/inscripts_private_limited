import { BiSolidDockLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import Image from "next/image";
import { VscEyeClosed } from "react-icons/vsc";
import { LuArrowDownUp } from "react-icons/lu";
import { FaAnglesRight } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdGitNetwork } from "react-icons/io";
import { MdOutlineInsertLink } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <nav className="border-b border-gray-200 bg-white h-14 w-full flex justify-between items-center px-6">
        <div className="flex items-center gap-2 ">
          <BiSolidDockLeft className="text-2xl text-[rgb(97,134,102)]" />
          <p className="text-[rgb(175,175,175)]">Workspace &#62;</p>
          <p className="text-[rgb(175,175,175)]">Folder 2 &#62;</p>
          <p>Spreedsheet 3</p>
          <p className="text-[rgb(175,175,175)] font-bold">...</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="relative">
            <input
              type="text"
              className=" bg-[rgb(246,246,246)] rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-[rgb(184,178,178)]"
              placeholder=" Search within sheet"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative cursor-pointer">
            <LuBell className=" text-2xl cursor-pointer" />
            <div className="absolute right-0 top-0 transform -translate-y-1/2  flex items-center justify-center bg-[rgb(75,106,79)] rounded-full w-5 h-5 border-2 border-white text-white text-xs font-bold">
              <p>3</p>
            </div>
          </div>
          <div className="rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-200">
            <Image src="/profile.png" alt="profile" width={40} height={40} />
          </div>
          <p>
            John Doe <br />
            <span className="text-gray-500">John.doe..</span>
          </p>
        </div>
      </nav>
      <nav className="border-b border-gray-200 bg-white h-14 w-full flex justify-between items-center px-6">
        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[rgb(246,246,246)] p-2 rounded-lg transition-colors duration-200">
            <p>Tool bar</p>
            <FaAnglesRight />
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[rgb(246,246,246)] p-2 rounded-lg transition-colors duration-200">
            <VscEyeClosed />
            <p>Hide fields</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[rgb(246,246,246)] p-2 rounded-lg transition-colors duration-200">
            <LuArrowDownUp />
            <p>Sort</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[rgb(246,246,246)] p-2 rounded-lg transition-colors duration-200">
            <IoFilter />
            <p>Filter</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[rgb(246,246,246)] p-2 rounded-lg transition-colors duration-200">
            <Image
              src="/updownarrow.png"
              alt="updownarrow"
              width={30}
              height={30}
            />
            <p>Cell view</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-[rgb(246,246,246)]  transition-colors duration-200">
            <CiImport />
            <p>Import</p>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-[rgb(246,246,246)] transition-colors duration-200">
            <CiExport />
            <p>Export</p>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-[rgb(246,246,246)] transition-colors duration-200">
            <FaRegShareFromSquare />
            <p>Share</p>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-[rgb(75,106,79)] text-white cursor-pointer hover:bg-[rgb(97,134,102)] transition-colors duration-200">
            <IoIosGitNetwork />
            <p>New Action</p>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-12 w-full *:border-y *:border-gray-200 pl-10 pr-4">
        <div className="bg-[rgb(226,226,226)] p-2 col-span-6 flex items-center gap-2">
          <div className=" bg-white rounded-lg p-1 w-48 flex items-center justify-center gap-2 cursor-pointer hover:bg-[rgb(246,246,246)] transition-colors duration-200">
            <MdOutlineInsertLink className="text-lg text-[rgb(26,140,255)]" />
            <p>Q3 Financial Overview</p>
          </div>
          <LuRefreshCw className="text-[rgb(250,103,54)]" />
        </div>
        <div className="bg-white p-5 "></div>
        <div className="bg-[rgb(210,224,212)] flex items-center justify-center gap-2 ">
          <IoMdGitNetwork className="rotate-180 text-[rgb(121,121,121)]  font-bold text-lg" />
          <p className="bg-[rgb(210,224,212)]">ABC</p>
          <HiDotsHorizontal className="text-[rgb(155,163,156)]" />
        </div>
        <div className="col-span-2 bg-[rgb(220,207,252)] flex items-center justify-center gap-2">
          <IoMdGitNetwork className="rotate-180 text-white font-bold text-lg" />
          <p>Answer a question </p>
          <HiDotsHorizontal className="text-[rgb(155,163,156)]" />
        </div>
        <div className="bg-[rgb(250,194,175)] flex items-center justify-center gap-2">
          <IoMdGitNetwork className="rotate-180 text-white font-bold text-lg" />
          <p>Extract</p>
          <HiDotsHorizontal className="text-[rgb(155,163,156)]" />
        </div>
        <div className="flex justify-center items-center text-2xl bg-[rgb(238,238,238)] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !border-l-[rgb(153,84,84)] !border-r-[rgb(153,84,84)] !border-t-[rgb(238,238,238)] !border-b-[rgb(238,238,238)] !border-dashed">
          <FiPlus />
        </div>
      </div>
      <div className="grid grid-cols-12 w-full *:border-y *:border-gray-200 pl-10 pr-4">
        <table className="border-collapse border border-gray-400 w-full col-span-12">
          <thead>
            <tr>
              <th>#</th>
              <th>Job Request</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>URL</th>
              <th>Assigned</th>
              <th>priority</th>
              <th>Due Date</th>
              <th>Est. Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Launch social media campaign for pro...</td>
              <td>15-11-2024</td>
              <td>In-process</td>
              <td>Aisha Patel</td>
              <td>www.aishapatel....</td>
              <td>Sophie Choudhury</td>
              <td>Medium</td>
              <td>20-11-2024</td>
              <td>6,200,000 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Navbar;
