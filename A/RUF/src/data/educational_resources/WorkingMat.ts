export class WorkingMat {
    topics: Object = [];
    resources: Object = [];
    constructor(topics: Array<string>, resources: Array<string>) {
        this.topics = topics;
        this.resources = resources;
    }
}