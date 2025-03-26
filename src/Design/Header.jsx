import { BsWindowSidebar } from "react-icons/bs";
import LeftNav from "./LeftNav";

const Header = () => {

    const navMenu = ['Courses', 'UI UX Design', 'Figma from A to Z'];

    return (
        <header className="flex gap-5 justify-between">
            <nav>
                <ul className="flex gap-2 items-center">
                    <BsWindowSidebar size={20} />
                    {navMenu.map((item, idx) => (
                        <span key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                            <li className="font-semibold text-black hover:bg-slate-200 rounded-md py-2 px-2 cursor-pointer">{item}</li> /
                        </span>
                    ))}
                </ul>
            </nav>
            <LeftNav />
        </header >
    )
}

export default Header