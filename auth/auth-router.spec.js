const request = require('supertest');
const server = require('../api/server');

let testUsername = `testing12_${Date.now()}`;
let testId;
let testToken;

describe ('API Login/Register functionality', () => {
    it('Should run a test', () => {
        expect(true).toBe(true);
    })

    it('Should fail registering a user for missing username', () => {
        return request(server)
        .post('/api/auth/register')
        .send({  password: 'password'})
        .then(res => {
            expect(res.body.error).toBe("Could not add user");
        })
    })

    it('Should register a user', () => {
        return request(server)
        .post('/api/auth/register')
        .send({ username: testUsername, password: 'password'})
        .then(res => {
            testId = res.body[0]
            expect(Array.isArray(res.body)).toBe(true);
        })
    })

    it('should fail loggin in with wrong credentials', () => {
        return request(server)
        .post('/api/auth/login')
        .send({username: testUsername, password: '1password'})
        .then(res => {
            expect(res.body.message).toBe(`Invalid Credentials`);
        })
    })

    it('should login a user', () => {
        return request(server)
        .post('/api/auth/login')
        .send({username: testUsername, password: 'password'})
        .then(res => {
            testToken = res.body.token;
            expect(res.body.message).toBe(`Welcome ${testUsername}`);
        })
    })


    it('Should delete the user', () => {
        return request(server)
        .delete(`/api/auth/${testId}`)
        .then(res => {
            expect(res.body).toBe(1);
        })
    })

    it('Should failt deleting the user for it does not exist', () => {
        return request(server)
        .delete(`/api/auth/${testId}`)
        .then(res => {
            expect(res.body).toBe(0);
        })
    })
})

describe('Should access dad jokes api', () => {
    it('Should be denied access due to invalid token', () => {
        return request(server)
        .get('/api/jokes/')
        .set('authorization', 'kjasd89u234oiu2394u234')
        .then(res => {
            console.log(res.body)
            expect(res.body.message).toBe('Invalid Credentials');
        })
    })

    it('Should return an array of jokes', () => {
        return request(server)
        .get('/api/jokes/')
        .set('authorization', testToken)
        .then(res => {
            console.log(res.body)
            expect(Array.isArray(res.body)).toBe(true);
        })
    })
})