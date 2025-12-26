import type { Prisma, PrismaClient, OrderItem } from "../generated/index.js";
export interface IOrderItemRepository {
    findAll(params: {
        skip: number;
        take: number;
        where: Prisma.OrderItemWhereInput;
        orderBy: Prisma.OrderItemOrderByWithRelationInput;
    }): Promise<{
        items: OrderItem[];
        total: number;
    }>;
    findById(id: number): Promise<OrderItem | null>;
    findRawById(id: number): Promise<OrderItem | null>;
    create(data: {
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    }): Promise<OrderItem>;
    update(id: number, data: {
        orderId: number;
        productId: number;
        quantity: number;
    }): Promise<OrderItem>;
    remove(id: number): Promise<OrderItem>;
}
export declare class OrderItemRepository implements IOrderItemRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(params: {
        skip: number;
        take: number;
        where: Prisma.OrderItemWhereInput;
        orderBy: Prisma.OrderItemOrderByWithRelationInput;
    }): Promise<{
        items: ({
            product: {
                name: string;
                description: string | null;
                price: Prisma.Decimal;
                stock: number;
                categoryId: number | null;
                id: number;
                image: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
            order: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                total: Prisma.Decimal;
                userId: number;
            };
        } & {
            id: number;
            order_id: number;
            product_id: number;
            quantity: number;
            priceAtTime: Prisma.Decimal;
        })[];
        total: number;
    }>;
    findById(id: number): Promise<({
        product: {
            name: string;
            description: string | null;
            price: Prisma.Decimal;
            stock: number;
            categoryId: number | null;
            id: number;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        order: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            total: Prisma.Decimal;
            userId: number;
        };
    } & {
        id: number;
        order_id: number;
        product_id: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    }) | null>;
    findRawById(id: number): Promise<{
        id: number;
        order_id: number;
        product_id: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    } | null>;
    create(data: {
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    }): Promise<{
        product: {
            name: string;
            description: string | null;
            price: Prisma.Decimal;
            stock: number;
            categoryId: number | null;
            id: number;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        order: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            total: Prisma.Decimal;
            userId: number;
        };
    } & {
        id: number;
        order_id: number;
        product_id: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    }>;
    update(id: number, data: {
        orderId: number;
        productId: number;
        quantity: number;
    }): Promise<{
        product: {
            name: string;
            description: string | null;
            price: Prisma.Decimal;
            stock: number;
            categoryId: number | null;
            id: number;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        order: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            total: Prisma.Decimal;
            userId: number;
        };
    } & {
        id: number;
        order_id: number;
        product_id: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    }>;
    remove(id: number): Promise<{
        id: number;
        order_id: number;
        product_id: number;
        quantity: number;
        priceAtTime: Prisma.Decimal;
    }>;
}
//# sourceMappingURL=order_items.repository.d.ts.map
