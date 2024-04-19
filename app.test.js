const app = require("./app");
const request = require("supertest");

describe("GET /", () => {
    describe("a healthy server", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).get("/");
            expect(response.statusCode).toBe(200);
        })
    })
})

describe("GET /tasks", () => {
    describe("Get all tasks", () => {
        test("Should return an array with a 200 status", async () => {
            const response = await request(app).get("/tasks/");
            expect(response.statusCode).toBe(200);
            // add one more expect to check if the response.body contains all the correct attributes
        })
    })

    describe("Get a task by id", () => {
        test("Should return an object with a 200 status", async () => {
            const id = 1;
            const response = await request(app).get(`/tasks/${id}`);
            expect(response.statusCode).toBe(200);
            // add one more expect to check if the response.body contains all the correct attributes
        })
    })
    
})

describe("POST /tasks/", () => {
    describe("create a new task with correct payload", () => {
        test("should respond with a 201 status code", async () => {
            const payload = { title: "new task", description: "description", status: "Open" }
            const response = await request(app)
                                .post("/tasks/")
                                .send(payload)
                                .set('Content-Type', 'application/json')
                                .set('Accept', 'application/json');
            expect(response.statusCode).toBe(201);
        })
    })

    describe("create a new task with no payload", () => {
        test("should respond with a 403 status code", async () => {
            const response = await request(app)
                                .post("/tasks/")
                                .set('Content-Type', 'application/json')
                                .set('Accept', 'application/json');
            expect(response.statusCode).toBe(403);
        })
    })

    describe("create a new task with missing title", () => {
        test("should respond with a 403 status code and 'title should not be empty' message", async () => {
            const payload = { description: "description", status: "Open" }
            const response = await request(app)
                                .post("/tasks/")
                                .send(payload)
                                .set('Content-Type', 'application/json')
                                .set('Accept', 'application/json');
            expect(response.statusCode).toBe(403) &&
            expect(response.body.error.message).toBe("Title should not be empty.");
        })
    })
})