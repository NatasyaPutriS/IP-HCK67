const request = require('supertest');
const express = require('express');
const { addUser, loginWithCredentials, currentUser, logout } = require('../controllers/UserController');


jest.mock('firebase/auth', () => ({
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    auth: jest.fn(),
}));

const app = express();
app.use(express.json());
app.post('/register', addUser);
app.post('/login', loginWithCredentials);
app.get('/user', currentUser);
app.post('/logout', logout);

describe('Authentication Routes', () => {
    const userData = {
        email: 'test@example.com',
        password: 'password',
        confirmPassword: 'password',
    };

    const loginData = {
        email: 'test@example.com',
        password: 'password',
    };

    const user = {
        email: 'test@example.com',
    };

    const refreshToken = 'mockRefreshToken';

    it('should register a new user', async () => {
        createUserWithEmailAndPassword.mockResolvedValueOnce({ user });

        const response = await request(app)
            .post('/register')
            .send(userData);

        expect(response.status).toBe(201);
    });

    it('should log in a user with credentials', async () => {
        signInWithEmailAndPassword.mockResolvedValueOnce({ user });

        const response = await request(app)
            .post('/login')
            .send(loginData);

        expect(response.status).toBe(200);
    });

    it('should get current user', async () => {
        const req = { cookies: { refreshToken } };

        auth.onAuthStateChanged.mockImplementationOnce(callback => {
            callback(user);
        });

        const response = await request(app)
            .get('/user')
            .set('Cookie', `refreshToken=${refreshToken}`);

        expect(response.status).toBe(200);
    });

    it('should log out a user', async () => {
        const req = { cookies: { refreshToken } };
        auth.signOut.mockResolvedValueOnce();

        const response = await request(app)
            .post('/logout')
            .set('Cookie', `refreshToken=${refreshToken}`);

        expect(response.status).toBe(200);
    });
});
