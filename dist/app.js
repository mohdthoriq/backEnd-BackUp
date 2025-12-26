import express, {} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { successResponse } from "./utils/response.js";
import { errorHandler } from "./middlewares/error.handler.js";
import { requestLogger } from "./middlewares/logging.middleware.js";
import { authenticate } from "./middlewares/auth.middlleware.js";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.router.js";
import categoryRouter from "./routes/category.routes.js";
import orderRouter from "./routes/orders.routes.js";
import orderItemRouter from "./routes/order_items.routes.js";
import profileRouter from "./routes/profile.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger.js";
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.set("query parser", "extended");
app.use(morgan("dev")); // Middleware logging HTTP request
// `morgan('dev')`: Middleware logging HTTP request. Format 'dev' memberikan output yang ringkas dan berwarna,
//                 sangat berguna saat pengembangan untuk melihat request yang masuk dan status responsnya.
app.use(helmet()); // Middleware keamanan header
// `helmet()`: Membantu mengamankan aplikasi Express dengan mengatur berbagai HTTP headers.
//             Ini melindungi dari beberapa kerentanan web yang diketahui seperti XSS.
app.use(cors()); // Middleware biar bisa di akses dari frontend
// `cors()`: Memungkinkan atau membatasi resource di server agar dapat diakses oleh domain lain (Cross-Origin Resource Sharing).
//           Sangat penting untuk API yang akan diakses oleh frontend dari domain berbeda.
app.use(requestLogger);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", userRouter);
app.get("/", (_req, res) => {
    successResponse(res, "Selamat datang di API E-Commerce!", {
        hari: 3,
        status: "Server hidup!",
    });
});
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/orders", authenticate, orderRouter);
app.use("/api/order-items", orderItemRouter);
app.use("/api/profile", profileRouter);
app.get(/.*/, (req, res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API E-Commerce`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
