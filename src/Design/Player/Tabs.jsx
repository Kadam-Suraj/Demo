import { useState } from "react";

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState("Overview");
    const data = ["Overview", "Author", "FAQ", "Announcements", "Reviews"];

    return (
        <div className="flex items-center gap-4">
            {
                data.map((item, idx) => (
                    <span key={idx} onClick={() => setCurrentTab(item)} className={`${currentTab === item && "text-purple-500 bg-purple-100"} rounded-md px-4 py-2 font-semibold cursor-pointer`}>{item}</span>
                ))
            }
        </div >
    )
}

export default Tabs