/* eslint-disable jest/no-done-callback */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable node/no-unpublished-require */
/* eslint-disable consistent-return */
// eslint-disable-next-line node/no-unpublished-require

const request = require('supertest');
// eslint-disable-next-line no-unused-vars
const should = require('should');
const Events = require('../src/eventscalendar/events');
const app = require('../src/routes/routes.js');

const event = new Events(new Date('1995-12-17T03:24:00'), 'Evento 1');

const stringJSON =
    `{"Fecha":"${event.fecha.toString()}"` +
    `,"Motivo":"${event.motivo.toString()}"}`;

describe('Creación de evento y calendario', function () {
    it('should return error 404 type and text of 1 event - GET', function (done) {
        request(app)
            .get('/eventscalendar/0')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
    it('should return error 404 type and text of all events - GET', function (done) {
        request(app)
            .get('/eventscalendar/')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
    it('should return correct type and text - PUT', function (done) {
        request(app)
            .put('/eventscalendar/')
            .expect('Content-Type', /json/)
            .expect(404, done);
        request(app)
            .put('/eventscalendar/?fecha=1995-12-17T03:24:00%20Evento%201')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (error, mensaje) {
                if (error) {
                    return done(error);
                }
                mensaje.text.should.equal(stringJSON);
                done();
            });
    });
    it('should return correct type and text of all events - GET', function (done) {
        request(app)
            .get('/eventscalendar/')
            .expect('Content-Type', /json/)
            .expect(200, done);
        request(app)
            .get('/eventscalendar/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (error, mensaje) {
                if (error) {
                    return done(error);
                }
                mensaje.text.should.equal(
                    `{"id":0,"Fecha":"${event.fecha.toString()}"` +
                        `,"Motivo":"${event.motivo.toString()}"}`
                );
                done();
            });
    });
    it('should return correct type and text of 1 event - GET', function (done) {
        request(app)
            .get('/eventscalendar/0')
            .expect('Content-Type', /json/)
            .expect(200, done);
        request(app)
            .get('/eventscalendar/0')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (error, mensaje) {
                // console.log(mensaje.text);
                if (error) {
                    return done(error);
                }
                mensaje.text.should.equal(stringJSON);
                done();
            });
    });
});
