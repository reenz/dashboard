const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../app.js")

describe("index page",() => {

  it("should respond with 200", (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      should.not.exist(err);
      res.status.should.equal(200);
      done();
    });
  });

  it("should respond number of row in table", (done) => {
    chai.request(server)
    .get('/top-table')
    .end((err, res) => {
      should.not.exist(err);
      res.body.table.length.should.equal(12);
      done();
    });
  });

  it("should respond with properties of the table", (done) => {
    chai.request(server)
    .get('/top-table')
    .end((err, res) => {
      should.not.exist(err);
      res.body.table[0].should.have.property('ID');
      res.body.table[0].should.have.property('METRIC');
      res.body.table[0].should.have.property('PRODUCT');
      res.body.table[0].should.have.property('EXPOSED');
      res.body.table[0].should.have.property('CONTROL');
      res.body.table[0].should.have.property('UPLIFT');
      res.body.table[0].should.have.property('PCT_UPLIFT');
      done();
    });
  });
});
