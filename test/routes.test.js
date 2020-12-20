// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const server = require('../src/routes/routes.js');

// Start application before running the test case
beforeAll(
    () =>
        new Promise((done) => {
            server.events.on('start', () => {
                done();
            });
        })
);

// Stop application after running the test case
afterAll(
    () =>
        new Promise((done) => {
            server.events.on('stop', () => {
                done();
            });
            server.stop();
        })
);

test('should success with server connection', async () => {
    const options = {
        method: 'PUT',
        url: '/eventscalendar',
    };
    const data = await server.inject(options);
    expect(data.statusCode).toBe(200);
});
