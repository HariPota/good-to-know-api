import request from 'supertest'
import { createServer } from '@src/utils/server.helper'
import { Category } from '@src/models/category.model'

describe('category controller', () => {
  it('#list | should return list of categories',  (done) => {
    request(createServer())
      .get('/api/categories')
      .expect(200)
      .expect('Content-Type', /json/)
      .end( (err, res) => {
        if (err) return done(err)
        const categories = res.body
        expect(categories).toBeInstanceOf(Array)
        expect(categories[0]).toHaveProperty('id')
        expect(categories[0]).toHaveProperty('name')
        expect(categories[0]).toHaveProperty('createdAt')
        expect(categories[0]).toHaveProperty('updatedAt')
        expect(categories[0].name).toEqual('Category')
        done()
      })
  })

  it('#create | should successfully create new category',  (done) => {
    request(createServer())
      .post('/api/categories')
      .send({ name: 'Category Test' })
      .expect('Content-Type', /json/)
      .expect(201, {})
      .end(async () => {
        const categories = await Category.findAll()
        expect(categories).toHaveLength(2)
        expect(categories[1].name).toEqual('Category Test')
        done()
      })
  })
})