// TODO: connect to postgresql

exports.getAllTasks = () => {
    let error = null; // error should be in { statusCode: 400 , message: "" }

    if (error) {
        return [null, error]
    }

    return [
        [
            {title: "Aiman Special", description: "He is from the state", status: "To-Do"},
            {title: "Megan Chong", description: "She was a girl from the state", status: "In Progress"}
        ],
        null
    ]
};

exports.getTaskById = (id) => {
    let error = null; // error should be in { statusCode: 400 , message: "" }

    if (error) {
        return [null, error]
    }

    // mock data
    const tasks = [
        {title: "Aiman Special", description: "He is from the state", status: "To-Do"},
        {title: "Megan Chong", description: "She was a girl from the state", status: "In Progress"}
    ];

    return [tasks[id], null]
}