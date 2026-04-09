const careerTime = [
    {
        years: "2025-Present",
        start: "2025-06",
        end: "Present",
        workplace : "Freelance",
        role: "Front-end Developer",
        tools: "React, Tailwindcss"
    },
]

function calculateExperience(careerTime) {
    let totalMonths = 0;

    careerTime.forEach(job => {
        const startDate = new Date(job.start);
        const endDate = job.end === "Present" ? new Date() : new Date(job.end);

        const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
        (endDate.getMonth() - startDate.getMonth());

        totalMonths += months;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years} years ${months} months`;
}


function Work() {

    const experience = calculateExperience(careerTime);

    return(
        <div className="pt-5 pb-5">
            <h1 className="md:text-7xl text-5xl text-white font-semibold text-right">Work</h1><hr className="border border-[#3d3d3d]" />
            <table className="w-full">
                <caption className="text-right caption-bottom pt-5 text-[#a6a6a6] text-xl mb-2">
                    Work experiences
                    <div>
                    <span className="text-[#f2f2f2] italic text-[18px] ml-2">{experience}</span>
                    </div>
                </caption>
                <tbody className="w-full">
                    {careerTime.map((item, index) => (
                        <tr key={index} className="border-b border-[#3d3d3d] hover:bg-[#f2f2f2] hover:text-black  transition-colors duration-300 cursor-[url(/src/assets/cursor.svg),pointer]">
                            <td className="px-4 py-2 pt-6 text-[#a6a6a6]">{item.years}</td>
                            <td className="px-4 py-2">
                                <span className="lg:mr-190 mr-5">{item.workplace}</span> 
                                <span className="mr-5">{item.role} |</span> 
                                <span>{item.tools}</span>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default Work;