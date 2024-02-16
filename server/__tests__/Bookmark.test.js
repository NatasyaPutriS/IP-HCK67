const request = require('supertest');
const express = require('express');
const bookmarkRouter = require('../routes/bookmark');

const app = express();
app.use(express.json());
app.use('/bookmarks', bookmarkRouter);

describe('Bookmark Routes', () => {
    it('should add a bookmark', async () => {
        const newBookmark = { /* Add sample bookmark data */ };
        const response = await request(app)
            .post('/bookmarks')
            .send(newBookmark);
        expect(response.status).toBe(201); // Updated expectation to 201 for successful creation
        // Add additional expectations as needed
    });

    it('should get all bookmarks', async () => {
        const response = await request(app)
            .get('/bookmarks');
        expect(response.status).toBe(200);
        // Add additional expectations as needed
    });

    it('should get a bookmark by ID', async () => {
        const bookmarkId = 'sample_id';
        const response = await request(app)
            .get(`/bookmarks/${bookmarkId}`);
        expect(response.status).toBe(200); // Corrected expectation to 200 for successful retrieval
        // Add additional expectations as needed
    });

    it('should update a bookmark', async () => {
        const bookmarkId = 'sample_id';
        const updatedBookmark = { /* Add updated bookmark data */ };
        const response = await request(app)
            .put(`/bookmarks/${bookmarkId}`)
            .send(updatedBookmark);
        expect(response.status).toBe(200);
        // Add additional expectations as needed
    });

    it('should delete a bookmark', async () => {
        const bookmarkId = 'sample_id';
        const response = await request(app)
            .post(`/bookmarks/delete/${bookmarkId}`);
        expect(response.status).toBe(200);
        // Add additional expectations as needed
    });

    it('should get a bookmark by user ID and recipe ID', async () => {
        const userId = 'sample_user_id';
        const recipeId = 'sample_recipe_id';
        const response = await request(app)
            .get(`/bookmarks/getbyid?userId=${userId}&recipeId=${recipeId}`);
        expect(response.status).toBe(200); // Corrected expectation to 200 for successful retrieval
        // Add additional expectations as needed
    });
});
