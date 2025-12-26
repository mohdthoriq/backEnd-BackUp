// import request from 'supertest'
// import app from '../app' // sesuaikan path
// import jwt from 'jsonwebtoken'
// import config from '../utils/env'
export {};
// describe('ORDER API', () => {
//   let orderId: number
//   const token = jwt.sign(
//     { id: 1, role: 'USER' },
//     config.JWT_SECRET
//   )
//   it('GET /api/orders → should return list of orders', async () => {
//     const res = await request(app).get('/api/orders')
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//     expect(Array.isArray(res.body.data.orders)).toBe(true)
//   })
//   it('POST /api/orders → should create order', async () => {
//     const res = await request(app)
//       .post('/api/orders')
//       .send({
//         userId: 1,
//         total_price: 10000,
//         status: 'PENDING',
//       })
//     expect(res.statusCode).toBe(201)
//     expect(res.body.success).toBe(true)
//     orderId = res.body.data.id
//   })
//   it('GET /api/orders/:id → should get order by id', async () => {
//     const res = await request(app)
//       .get(`/api/orders/${orderId}`)
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//     expect(res.body.data.id).toBe(orderId)
//   })
//   it('POST /api/orders/checkout → should checkout order', async () => {
//     const res = await request(app)
//       .post('/api/orders/checkout')
//       .set('Authorization', `Bearer ${token}`)
//       .send({
//         orderId,
//         items: [
//           {
//             productId: 1,
//             quantity: 1,
//           },
//         ],
//       })
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//   })
//   it('PUT /api/orders/:id → should update order', async () => {
//     const res = await request(app)
//       .put(`/api/orders/${orderId}`)
//       .send({
//         status: 'PAID',
//       })
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//   })
//   it('DELETE /api/orders/:id → should delete order', async () => {
//     const res = await request(app)
//       .delete(`/api/orders/${orderId}`)
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//   })
// })
//# sourceMappingURL=orders.test.js.map