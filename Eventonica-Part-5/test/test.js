const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:3000");

describe("/events", function() {
  it("GET should respond with status of 200", function(done) {
    server
      .get("/events")
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it("POST should respond with success message", function(done) {
    server
      .post("/events")
      .send({ id: 0, name: 'Concert of JLo', date: '2020-02-01', category: 'concert' })
      .expect(200)
      .end(function(err, res) {
        res.text.should.equal("Event added successfully");
        done();
      });
  });
});

describe("/users", function() {
  it("GET should respond with status of 200", function(done) {
    server
      .get("/users")
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});