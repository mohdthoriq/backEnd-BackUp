import request from "supertest";
import app from "../app.js";
import jwt from "jsonwebtoken";
import config from "../utils/env.js";
import path from "node:path";
describe("GET /api/products", () => {
    const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);
    it("should return 200 and list of products", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data.products)).toBe(true);
    });
});
describe("POST /api/products", () => {
    const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);
    it("should return 401 if no token is provided of products", async () => {
        const res = await request(app).post("/api/products")
            .field("name", "abc")
            .field("description", "abc")
            .field("price", 1)
            .field("stock", 1)
            .field("categoryId", 29);
        expect(res.statusCode).toEqual(401);
        expect(res.body.success).toBe(false);
    });
    it("should return 201 if token is provided of products", async () => {
        const res = await request(app).post("/api/products")
            .field("name", "abc")
            .field("description", "abc")
            .field("price", 1)
            .field("stock", 1)
            .field("categoryId", 29)
            .attach("image", path.resolve(__dirname, "../../sunset.jpeg"))
            .set("Authorization", `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        expect(res.body.success).toBe(true);
    });
});
describe("PUT /api/products/:id", () => {
    const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);
    it("should update product", async () => {
        const res = await request(app)
            .put("/api/products/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
            name: "Updated Product",
            price: 2000,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });
});
describe("DELETE /api/products/:id", () => {
    const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);
    it("should delete product", async () => {
        const res = await request(app)
            .delete("/api/products/1")
            .set("Authorization", `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });
});
//# sourceMappingURL=product.test.js.map
