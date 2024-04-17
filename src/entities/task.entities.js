exports.Task = class Task {
    title = "";
    description = "";
    status = "";

    constructor({title, description, status}) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

    validate () {
        if (this.title.length === 0) {
            throw Error("Oi oi") // maybe can use validator libraries?
        }
    }
}
