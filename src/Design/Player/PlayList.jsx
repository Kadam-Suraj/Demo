import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const PlayList = () => {
    const [currentTopic, setCurrentTopic] = useState(null);

    const courseData = [
        {
            id: 1,
            title: 'Intro',
            duration: '22min',
            data: [
                { name: 'Introduction', duration: '2min' },
                { name: 'What is Figma?', duration: '5min' },
                { name: 'Understanding Figma', duration: '12min' },
                { name: 'UI tour', duration: '3min' }
            ]
        },
        {
            id: 2,
            title: 'Intermediate Level Stuff',
            duration: '1h 20min',
            data: [
                { name: 'Working with Frames', duration: '15min' },
                { name: 'Layers & Groups', duration: '20min' },
                { name: 'Auto Layout Basics', duration: '25min' },
                { name: 'Alignment & Spacing', duration: '20min' }
            ]
        },
        {
            id: 3,
            title: 'Advanced Stuff',
            duration: '36min',
            data: [
                { name: 'Prototyping Basics', duration: '12min' },
                { name: 'Interactive Components', duration: '14min' },
                { name: 'Smart Animate & Transitions', duration: '10min' }
            ]
        },
        {
            id: 4,
            title: 'Imports & Graphics',
            duration: '40min',
            data: [
                { name: 'Importing Images & SVGs', duration: '15min' },
                { name: 'Vector Editing in Figma', duration: '15min' },
                { name: 'Masking & Clipping', duration: '10min' }
            ]
        },
        {
            id: 5,
            title: 'Component in Figma',
            duration: '1h 12min',
            data: [
                { name: 'Creating Components', duration: '20min' },
                { name: 'Using & Reusing Components', duration: '25min' },
                { name: 'Variants & Component Properties', duration: '27min' }
            ]
        },
        {
            id: 6,
            title: 'Styles in Figma',
            duration: '41min',
            data: [
                { name: 'Text Styles', duration: '15min' },
                { name: 'Color Styles', duration: '12min' },
                { name: 'Effects & Shadows', duration: '14min' }
            ]
        },
        {
            id: 7,
            title: 'Summary',
            duration: '8min',
            data: [
                { name: 'Final Thoughts', duration: '4min' },
                { name: 'Next Steps & Resources', duration: '4min' }
            ]
        }
    ];

    return (
        <div className="rounded-md border flex flex-col border-slate-300 max-w-[21rem] w-full h-fit">
            <h4 className="border-b font-semibold p-3 border-b-slate-300">Course content</h4>
            <ul className="w-full">
                {courseData.map((item) => (
                    <details key={item.id} className="flex justify-between flex-col items-center max-w-40 w-full cursor-pointer min-w-full py-1">
                        <summary onClick={() => setCurrentTopic(prev => prev === item.id ? null : item.id)} className="flex justify-between items-center w-full min-w-40 p-2 font-semibold border-b border-b-slate-300">
                            <li className="list-decimal">{item.title}</li>
                            <span className="min-w-28 flex items-center gap-2 justify-end font-normal">{item.duration} <IoIosArrowDown className={`${currentTopic === item.id && "rotate-180"} p-1 border-slate-300 rounded-md border h-5 w-5`} /></span>
                        </summary>
                        <ul className="bg-slate-100 min-w-full p-2 w-[20.8rem]">
                            {
                                item?.data.map((item, idx) => (
                                    <details key={idx} className="text-slate-900/85 p-2">
                                        <summary className="flex items-center gap-2">
                                            <li className="flex items-center justify-between w-full">
                                                {item.name}<span>{item.duration}</span>
                                            </li>
                                        </summary>
                                    </details>
                                ))
                            }
                        </ul>
                    </details>
                ))}
            </ul>
        </div >
    )
}

export default PlayList