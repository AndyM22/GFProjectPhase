export interface ITask {
    id: number;
    title: string;
    project: string;
    done: boolean;
    editMode: boolean,
    deleted: boolean,
    details?: string;
}
