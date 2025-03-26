import { LiaBellSolid } from "react-icons/lia"
import { LuHardDrive } from "react-icons/lu"

const LeftNav = () => {
    return (
        <div className="flex gap-5 items-center">
            <LuHardDrive size={22} />
            <span className="relative">
                <LiaBellSolid size={22} />
                <span className="h-2 w-2 rounded-full bg-red-600 absolute -right-1 top-0" />
            </span>
        </div>
    )
}

export default LeftNav