// src/prisma.ts
import { Pool } from "pg";
import config from "./utils/env.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/index.js";
let prisma;
const getPrisma = () => {
    if (!prisma) {
        const pool = new Pool({ connectionString: config.DATABASE_URL });
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({ adapter });
    }
    return prisma;
};
export const PrismaInstance = getPrisma();
export default getPrisma;
//# sourceMappingURL=database.js.map
