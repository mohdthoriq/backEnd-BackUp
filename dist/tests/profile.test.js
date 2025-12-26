// import request from 'supertest'
// import app from '../app'
// import jwt from 'jsonwebtoken'
// import config from '../utils/env'
// import path from 'path'
export {};
// let profileId: number
// describe('PROFILE API', () => {
//   const token = jwt.sign(
//     { id: 1, role: 'USER' },
//     config.JWT_SECRET
//   )
//   it('POST /api/profiles → should create profile', async () => {
//     const res = await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .field('name', 'Rick')
//       .field('gender', 'male')
//       .field('address', 'Bogor')
//       .field('userId', 1)
//       .attach(
//         'profile_picture_url',
//         path.resolve(__dirname, '../../sunset.jpeg')
//       )
//     expect(res.statusCode).toBe(201)
//     expect(res.body.success).toBe(true)
//     profileId = res.body.data.id
//     expect(profileId).toBeDefined()
//   })
//   it('GET /api/profiles/:id → should get profile by id', async () => {
//     const res = await request(app)
//       .get(`/api/profiles/${profileId}`)
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//     expect(res.body.data.id).toBe(profileId)
//   })
//   it('PUT /api/profiles/:id → should update profile', async () => {
//     const res = await request(app)
//       .put(`/api/profiles/${profileId}`)
//       .send({
//         address: 'Jakarta',
//       })
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//     expect(res.body.data.address).toBe('Jakarta')
//   })
//   it('DELETE /api/profiles/:id → should delete profile', async () => {
//     const res = await request(app)
//       .delete(`/api/profiles/${profileId}`)
//     expect(res.statusCode).toBe(200)
//     expect(res.body.success).toBe(true)
//   })
// })
//# sourceMappingURL=profile.test.js.map