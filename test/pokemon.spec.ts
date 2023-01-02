import 'mocha';
import {PokemonResponses} from "../src/models/PokemonResponses.model";

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let url:string;

describe('Pokemon endpoint tests', () => {
    before(() => {
        url = 'https://pokeapi.co/api/v2/pokemon/';
    });
    it('Pokemon number 100 name should be voltorb', () => {
        return chai.request(url).get('100/').then((res: PokemonResponses) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.name, "Expected name for id=100 is voltorb").to.eql('voltorb');
        });
    });
    it('Pokemon number 100 name has sprites', () => {
        return chai.request(url).get('100/').then((res: PokemonResponses) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.sprites, "There should be sprites for id=100").to.not.be.null;
        });
    });
    it('Pokemon number 100 type is Electric', () => {
        return chai.request(url).get('100/').then((res: PokemonResponses) => {
            chai.expect(res.body.types).to.have.lengthOf(1);
            chai.expect(res.body.types[0].type.name, "Pokemon with id=100 should have Electric type").to.eql('electric');
        });
    });
    it('Pokemon number 35 is default for its species', () => {
        return chai.request(url).get('35/').then((res: PokemonResponses) => {
            chai.expect(res.body.is_default).be.true;
        });
    });
    it('Pokemon number 100 should have 1 hidden and 2 visible abilities', () => {
        return chai.request('https://pokeapi.co/api/v2/').get('pokemon/100/').then((res: PokemonResponses) => {
            let hiddenAbilities = 0;
            let visibleAbilities = 0;
            res.body.abilities.forEach(ability => {
                ability.is_hidden ? hiddenAbilities++ : visibleAbilities++;
            })
            chai.expect(hiddenAbilities, 'Pokemon id=100 should have 1 hidden ability').to.equal(1);
            chai.expect(visibleAbilities, 'Pokemon id=100 should have 2 visible abilities').to.equal(2);
        });
    });
});
