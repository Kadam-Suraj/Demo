import { BsWindowSidebar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { PiChatsCircle, PiCodeBlock } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import assets from "../assets/index";
import Avatar from "./Avatar";

const Sidebar = () => {

    const menu = [
        {
            title: 'Dashboard',
            icon: <RiHomeLine />,
        },
        {
            title: 'eBook',
            icon: <IoBookOutline />,
        },
        {
            title: 'Courses',
            icon: <BsWindowSidebar />,
        },
        {
            title: 'Code challenges',
            icon: <PiCodeBlock />,
        },
        {
            title: 'Community',
            icon: <PiChatsCircle />
        }
    ];

    const bottomMenu = [
        {
            title: 'Settings',
            icon: <MdOutlineSettings />
        },
        {
            title: 'Support',
            icon: <LuHeadphones />
        },
    ];

    const renderMenu = (data) => {
        return data.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2 hover:bg-slate-200 rounded-md py-2 px-3 cursor-pointer">
                {item.icon}
                <li className="">{item.title}</li>
            </span>
        ))
    };

    return (
        <div className="flex flex-col gap-3 px-2 font-semibold min-w-48 h-full">
            <div className="flex items-center gap-3">
                <img src={assets.logo} alt="logo" className="w-7 h-7" />
                <h3 className="font-bold text-lg">Codelingo</h3>
            </div>
            <Avatar />
            <ul className="flex flex-col justify-between gap-5 h-full">
                <span>
                    {
                        renderMenu(menu)
                    }
                </span>
                <span>
                    {
                        renderMenu(bottomMenu)
                    }
                </span>
            </ul>
        </div>
    )
}

export default Sidebar