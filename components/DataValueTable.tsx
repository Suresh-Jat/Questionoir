import React from "react";

const JobHistory = ({ inputValue }:
    {
        inputValue: any
    }
) => {
    const jobs = [
        {
            name: "UX designer",
            company: "Scale nexus",
            project: "Dashboard design",
            startDate: "1001-2025",
            endDate: "22-01-2025",
            status: "Completed",
        },
        {
            name: "Full stack developer",
            company: "Durapid technologies",
            project: "Dashboard design",
            startDate: "10-01-2025",
            endDate: "22-01-2025",
            status: "Completed",
        },
        {
            name: "Backend engineer",
            company: "Gosotek technologies",
            project: "App development",
            startDate: "10-01-2025",
            endDate: "22-01-2025",
            status: "Completed",
        },
        {
            name: "Backend engineer",
            company: "Gosotek technologies",
            project: "App development",
            startDate: "10-01-2025",
            endDate: "22-01-2025",
            status: "Completed",
        },
        {
            name: "React js dev.",
            company: "Gosotek technologies",
            project: "Dashboard design",
            startDate: "10-01-2025",
            endDate: "-",
            status: "In progress",
        },
    ];

    const filteredData = jobs.filter(({ name, company, project, startDate, endDate, status }) => {
        return [name, company, project, startDate, endDate, status].some(field => field.toLowerCase().includes(inputValue.toLowerCase()));
    });

    /*Here some is used:
        The .some() method is used to test whether at least one element in an array satisfies a given condition. It stops iterating as soon as it finds a match, which makes it efficient in scenarios where you only need to check if any condition is true.*/

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-200 m-6">
            <h2 className="text-xl font-bold mb-10">Job History</h2>
            <div className="overflow-x-auto">
                <table className="w-full h-full">
                    <thead>
                        <tr className=" text-gray-500 text-left bg-gray-200 rounded-xl">
                            <th className="px-4 py-2">Employee name</th>
                            <th className="px-4 py-2">Company</th>
                            <th className="px-4 py-2">Project</th>
                            <th className="px-4 py-2">Starting date</th>
                            <th className="px-4 py-2">End date</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((job, index) => (
                            <tr key={index} className="h-20">
                                <td className="px-4 py-2">{job.name}</td>
                                <td className="px-4 py-2">{job.company}</td>
                                <td className="px-4 py-2">{job.project}</td>
                                <td className="px-4 py-2">{job.startDate}</td>
                                <td className="px-4 py-2">{job.endDate}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${job.status === "Completed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-orange-100 text-orange-700"
                                            }`}
                                    >
                                        {job.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobHistory;
