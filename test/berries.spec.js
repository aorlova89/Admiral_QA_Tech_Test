"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let url;
describe('Berries endpoint tests', () => {
    before(() => {
        url = 'https://pokeapi.co/api/v2/berry/';
    });
    // these tests can be parameterized using mocha-param npm package
    it('Berry #10 has flavor Bitter with potency = 10', () => {
        return chai.request(url).get('10').then((res) => {
            const flavors = res.body.flavors;
            const bitter = flavors.find((el => el.flavor.name === 'bitter'));
            chai.expect(bitter === null || bitter === void 0 ? void 0 : bitter.potency, 'Berry id=10 should have Bitter flavor with potency=10').equal(10);
        });
    });
});
describe('Berry Flavors endpoint tests', () => {
    before(() => {
        url = 'https://pokeapi.co/api/v2/berry-flavor/';
    });
    it('Flavor with id=4 is Bitter', () => {
        return chai.request(url).get('4').then((res) => {
            chai.expect(res.body.name, 'Flavor with id=10 should be Bitter').equal('bitter');
        });
    });
});
