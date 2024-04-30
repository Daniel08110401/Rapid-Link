import type { JobData, FilterData } from "../types/Job";

export const exampleJob: JobData = {
    data: [
        {
            jobTitle: "Software Engineer",
            description: "Develop and maintain web applications using React, TypeScript, and Node.js.",
            category: "IT/Software",
            location: "San Francisco, CA",
            id: "1"
        },
        {
            jobTitle: "Frontend Engineer",
            description: "Develop and maintain web applications using React, TypeScript, and Node.js.",
            category: "IT/Software",
            location: "San Francisco, CA",
            id: "2"
        },
        {
            jobTitle: "Backend Engineer",
            description: "Develop and maintain web applications using React, TypeScript, and Node.js.",
            category: "IT/Software",
            location: "San Francisco, CA",
            id: "3"
        }
    ]
}

export const filterData: FilterData = {
    data: [
        {
            title: "Company",
            options: [
                { value: "", name: "All" },
                { value: "corporate", name: "Corporate" },
                { value: "startups", name: "StartUps" }
            ]
        },
        {
            title: "Job Categories",
            options: [
                { value: "", name: "All" },
                { value: "IT/Software", name: "IT / Software" },
                { value: "Marketing", name: "Marketing" }
            ]
        },
        {
            title: "Location",
            options: [
                { value: "", name: "All" },
                { value: "seoul", name: "Seoul" },
                { value: "busan", name: "Busan" },
            ]
        }
    ]
}