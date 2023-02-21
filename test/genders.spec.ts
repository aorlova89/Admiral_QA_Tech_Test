import "mocha";
import { GendersResponse } from "../src/models/GendersResponses.model";

let chai = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
let url: string;

describe("Genders endpoint tests", () => {
  before(() => {
    url = "https://pokeapi.co/api/v2/gender/";
  });

  it("id=1 is for Female", () => {
    return chai
      .request(url)
      .get("1")
      .then((res: GendersResponse) => {
        chai
          .expect(res.body.name, "Female is expected for id=1")
          .to.eql("female");
      });
  });
  it("id=2 is for Male", () => {
    return chai
      .request(url)
      .get("2")
      .then((res: GendersResponse) => {
        chai.expect(res.body.name, "Male is expected for id=2").to.eql("male");
      });
  });
  it("id=3 is for Genderless", () => {
    return chai
      .request(url)
      .get("3")
      .then((res: GendersResponse) => {
        chai
          .expect(res.body.name, "Genderless is expected for id=3")
          .to.eql("genderless");
      });
  });
  it("id=4 returns none", () => {
    return chai
      .request(url)
      .get("4")
      .then((res: GendersResponse) => {
        chai.expect(res.body.name, "Empty response is expected for id=4").to.be
          .undefined;
      });
  });
});
