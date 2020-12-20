// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../src/routes/routes.js');

describe('Test de eventscalendar/?', () => {
    test('Creación de evento - PUT', () =>
        request(app)
            .put('/eventscalendar/')
            .then((response) => {
                expect(response.statusCode).toBe(200);
            }));
});
