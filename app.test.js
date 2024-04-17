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