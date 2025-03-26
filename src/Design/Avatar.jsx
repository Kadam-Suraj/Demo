import { IoIosArrowDown } from "react-icons/io"

const Avatar = () => {
    return (
        <div className="flex items-center gap-2 justify-between border border-slate-300 rounded-md p-2">
            <div className="flex items-center gap-2">
                <img src="https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" className="h-7 w-7 rounded-full" />
                <span className="text-sm font-semibold">Scott M.</span>
            </div>
            <IoIosArrowDown />
        </div>
    )
}

export default Avatar