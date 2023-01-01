import request from 'supertest'
import { createServer } from '@src/utils/server.helper'

describe('category controller', () => {
  it('should return list of categories',  (done) => {
    request(createServer())
      .get('/api/categories')
      .expect(200)
      .expect('Content-Type', /json/)
      .end( (err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject([])
        done()
      })
  })
})