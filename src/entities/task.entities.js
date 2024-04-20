exports.tableName = "tasks";

exports.columnNames = ["title", "description", "status"];

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
        // maybe can use validator libraries?
        let errorMsg = "";

        if (!this.title || !this.title.length) {
            errorMsg = "Title should not be empty."
            return [null, errorMsg];
        }
        
        return [true, null];
    }
}