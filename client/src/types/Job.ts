type JobData = {
    data: Array<Job>;
}

type Job = {
    jobTitle: string;
    description: string;
    category: string;
    location: string;
    id: string;
}

type FilterData = {
    data: Array<Filter>;
}

type Filter = {
    title: string;
    options: Array<Options>;
}
type Options = {
    value: string;
    name: string;
}

export type { JobData, Job, FilterData, Filter, Options };