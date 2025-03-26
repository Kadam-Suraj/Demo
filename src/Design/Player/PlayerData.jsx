import { FaCheck } from "react-icons/fa";

const PlayerData = () => {
    const data = [
        "Setting up the environment", "Understand HTML programming", "Advanced HTML Practices", "Code HTML", "Build a portfolio website", "Start building beautiful websites", "Responsive designs"
    ];

    return (
        <section className="flex flex-col gap-5 border rounded-md p-4 border-slate-300">
            <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-lg">About Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quia possimus? Architecto eligendi, ea suscipit sequi unde error laboriosam. Vel vero minima esse molestiae fugit distinctio veritatis cum nam enim.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad minima voluptates accusantium necessitatibus voluptatum quisquam ex molestias!</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">What You Will Learn</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-950/80">
                    {
                        data.map((item, idx) => (
                            <span key={idx} className="flex gap-2 items-center"><FaCheck className="text-green-600"/> {item}</span>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PlayerData