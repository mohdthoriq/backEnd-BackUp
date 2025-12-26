// import request from 'supertest'
// import app from '../app'
export {};
// let orderItemId: number
// describe('ORDER ITEM API', () => {
//   it('GET /api/order-items → should return list', async () => {
//     const res = await request(app)
//       .get('/api/order-items')
//       .query({
//         page: 1,
//         limit: 10,
//       })
//     expect(res.statusCode).toEqual(200)
//     expect(res.body.success).toBe(true)
//     expect(Array.isArray(res.body.data.items)).toBe(true)
//   })
//   it('POST /api/order-items → should create order item', async () => {
//     const res = await request(app)
//       .post('/api/order-items')
//       .send({
//         orderId: 1,
//         productId: 1,
//         quantity: 2,
//       })
//     expect(res.statusCode).toEqual(201)
//     expect(res.body.success).toBe(true)
//     orderItemId = res.body.data.id
//     expect(orderItemId).toBeDefined()
//   })
//   it('GET /api/order-items/:id → should get by id', async () => {
//     const res = await request(app)
//       .get(`/api/order-items/${orderItemId}`)
//     expect(res.statusCode).toEqual(200)
//     expect(res.body.success).toBe(true)
//     expect(res.body.data.id).toBe(orderItemId)
//   })
//   it('PUT /api/order-items/:id → should update order item', async () => {
//     const res = await request(app)
//       .put(`/api/order-items/${orderItemId}`)
//       .send({
//         orderId: 1,
//         productId: 1,
//         quantity: 5,
//       })
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//     expect(res.body.data.quantity).toBe(5)
//   })
//   it('DELETE /api/order-items/:id → should delete order item', async () => {
//     const res = await request(app)
//       .delete(`/api/order-items/${orderItemId}`)
//     expect(res.statusCode).toEqual(200)
//     expect(res.body.success).toBe(true)
//   })
// })
//# sourceMappingURL=order-item.test.js.map