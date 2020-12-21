/* eslint-disable node/no-unpublished-require */
/* eslint-disable consistent-return */
// eslint-disable-next-line node/no-unpublished-require

const request = require('supertest');
const should = require('should');
const app = require('../src/routes/routes.js');

describe('Creación de evento y calendario', () => {
    it('should return correct type and text - PUT', () =>
        new Promise((done) => {
            request(app)
                .put('/eventscalendar/')
                .expect('Content-Type', /json/)
                .expect(200, done);
            request(app)
                .put('/eventscalendar/?fecha=1995-12-17T03:24:00%20Evento%201')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((error, mensaje) => {
                    if (error) {
                        return done(error);
                    }
                    mensaje.text.should.equal(
                        '{"Fecha":"Sun Dec 17 1995 03:24:00 GMT+0100 (GMT+01:00)","Motivo":"Evento 1"}'
                    );
                    done();
                });
        }));
    it('should return correct type and text of all events - GET', () =>
        new Promise((done) => {
            request(app)
                .get('/eventscalendar/')
                .expect('Content-Type', /json/)
                .expect(200, done);
            request(app)
                .get('/eventscalendar/')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((error, mensaje) => {
                    console.log(mensaje.text);
                    if (error) {
                        return done(error);
                    }
                    mensaje.text.should.equal(
                        '{"Fecha":"Sun Dec 17 1995 03:24:00 GMT+0100 (GMT+01:00)","Motivo":"Evento 1"}'
                    );
                    done();
                });
        }));
});
