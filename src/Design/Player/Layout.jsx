import Player from "./Player"
import PlayerMenu from "./PlayerMenu"
import PlayList from "./PlayList"
import { IoIosArrowBack } from "react-icons/io"
import Button from "../Components/Button";
import { BiSolidLock } from "react-icons/bi";
import PlayerData from "./PlayerData";
import Tabs from "./Tabs";

const Layout = () => {
    return (
        <section className="flex-col flex gap-5">
            <div className="flex gap-4">
                <IoIosArrowBack className="p-2 border border-slate-400 rounded-md w-8 h-8" />
                <div className="flex gap-2 items-center justify-between w-full">
                    <PlayerMenu />
                    <div className="flex gap-5 items-center font-semibold">
                        <button className="text-violet-500 cursor-pointer">Share</button>
                        <Button className="flex gap-2 items-center cursor-pointer"><BiSolidLock /> Enroll Now</Button>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 w-full justify-between overflow-y-auto">
                <div className="flex flex-col gap-5 w-full">
                    <Player />
                    <Tabs />
                    <PlayerData />
                </div>
                <PlayList />
            </div>
        </section>
    )
}

export default Layout