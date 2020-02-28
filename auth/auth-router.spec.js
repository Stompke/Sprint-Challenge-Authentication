const request = require('supertest');
const server = require('../api/server');

describe ('API Login/Register functionality', () => {
    it('Should run a test', () => {
        expect(true).toBe(true);
    })

    it('Should register a user', () => {
        return request(server)
        .post('/api/auth/register')
        .send({ username: `testing12_${Date.now()}`, password: 'test'})
        .then(res => {
            console.log(res.body)
            expect(Array.isArray(res.body)).toBe(true);
        })
    })
})