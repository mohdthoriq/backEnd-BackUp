import request from "supertest";
import app from "../app.js";
describe("GET /api/categories", () => {
    it("should return list of categories with pagination info", async () => {
        const res = await request(app)
            .get("/api/categories")
            .query({
            page: 1,
            limit: 10,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data.categories)).toBe(true);
        expect(typeof res.body.data.total).toBe("number");
        expect(typeof res.body.data.totalPages).toBe("number");
        expect(res.body.data.currentPage).toBe(1);
    });
});
describe("GET /api/categories/:id", () => {
    it("should return category by id", async () => {
        const res = await request(app)
            .get("/api/categories/1");
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty("id");
        expect(res.body.data.id).toBe(1);
        expect(res.body.data).toHaveProperty("name");
    });
});
describe("GET /api/categories/stats", () => {
    it("should return category dashboard stats", async () => {
        const res = await request(app)
            .get("/api/categories/stats");
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
        if (res.body.data.length > 0) {
            const category = res.body.data[0];
            expect(category).toHaveProperty("id");
            expect(category).toHaveProperty("name");
            expect(category).toHaveProperty("totalProducts");
            expect(category).toHaveProperty("totalStock");
            expect(category).toHaveProperty("avgPrice");
            expect(typeof category.totalProducts).toBe("number");
            expect(typeof category.totalStock).toBe("number");
            expect(typeof category.avgPrice).toBe("number");
        }
    });
});
describe("POST /api/categories", () => {
    it("should create new category", async () => {
        const res = await request(app)
            .post("/api/categories")
            .send({
            name: "Test Category"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty("id");
        expect(res.body.data.name).toBe("Test Category");
    });
    it("should fail if category name already exists", async () => {
        const res = await request(app)
            .post("/api/categories")
            .send({
            name: "Test Category"
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBe(false);
    });
});
//# sourceMappingURL=category.test.js.map
