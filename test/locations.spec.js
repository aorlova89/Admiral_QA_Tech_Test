"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let url;
describe('Location endpoint tests', () => {
    before(() => {
        url = 'https://pokeapi.co/api/v2/location/';
    });
    it('Location name is a string', () => {
        return chai.request(url).get('1').then((res) => {
            chai.expect(res.body.name).to.be.a('string');
        });
    });
    it('Location includes Region', () => {
        return chai.request(url).get('1').then((res) => {
            chai.expect(res.body.region).to.exist;
        });
    });
    it('Location area url is correct', () => {
        return chai.request(url).get('1').then((res) => {
            const locationAreaName = res.body.areas[0].name;
            chai.request(res.body.areas[0].url).get('').then((resp) => {
                chai.expect(resp.body.name, 'Area name should be the same that Location area from Location response').to.equal(locationAreaName);
            });
        });
    });
});
describe('Location Area endpoint tests', () => {
    before(() => {
        url = 'https://pokeapi.co/api/v2/location-area/';
    });
    it('Location-area response has all expected keys', () => {
        return chai.request(url).get('1').then((res) => {
            chai.expect(res.body).to.contains.all.keys('id', 'name', 'game_index', 'encounter_method_rates', 'location', 'names', 'pokemon_encounters');
        });
    });
});
