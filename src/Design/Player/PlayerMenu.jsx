import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const PlayerMenu = () => {

    const data = {
        'title': 'Figma from A to Z',
        'type': 'UI/UX Design',
        'lessons': '38 lessons',
        'duration': '4h 30min',
        'rating': '4.5 (126 reviews)'
    };

    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-4 items-center font-semibold">
                <h3 className="font-bold text-lg">{data?.title}</h3>
                <span className="py-0.5 px-1 rounded-md border text-xs border-slate-400/50">{data?.type}</span>
            </div>
            <div className="flex items-center gap-5 text-sm text-slate-800/85">
                <span className="flex items-center gap-2"><FaRegCirclePlay className="text-violet-800" /> {data.lessons}</span>
                <span className="flex items-center gap-2"><FaRegClock className="text-violet-800" /> {data.duration}</span>
                <span className="flex items-center gap-2"><FaRegStar className="text-violet-800" /> {data.rating}</span>
            </div>
        </div>
    )
}

export default PlayerMenu