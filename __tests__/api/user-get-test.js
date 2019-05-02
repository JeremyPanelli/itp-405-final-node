const frisby = require("frisby");

describe("user", function(){
  it("should return a status 404 when user table id is not found", function(){
    return frisby
      .fetch("http://localhost:8000/api/users/doesnotexist", {
        method:"get"
      })
      .expect("status", 404);
  });
  it("should return a status 200 when a table of all users is returned", function(){
    return frisby
      .fetch("http://localhost:8000/api/users", {
        method:"get",
      })
      .expect("status", 200);
  });
  it("should return a status 200 when a table is returned", function(){
    return frisby
      .fetch("http://localhost:8000/api/userstock", {
        method:"get",
      })
      .expect("status", 200);
  });

  it("should return a status 200 when the stocks table is returned", function(){
    return frisby
      .fetch("http://localhost:8000/api/stock", {
        method:"get",
      })
      .expect("status", 200);
  });

  it("should return a status 200 when the user's stocks table is returned", function(){
    return frisby
      .fetch("http://localhost:8000/api/users/1", {
        method:"get",
      })
      .expect("status", 200);
  });
  it("should return a status 404 when the user doesn't exist", function(){
    return frisby
      .fetch("http://localhost:8000/api/users/-1", {
        method:"get",
      })
      .expect("status", 404);
  });
  it("should return a status 200 when the user posts a new stock to their profile", function(){
    return frisby
      .fetch("http://localhost:8000/api/users/1/abc123", {
        method:"post",
      })
      .expect("status", 200);
  });

  it("should return a status 200 when the user deletes a stock from their profile", function(){
    return frisby
      .fetch("http://localhost:8000/api/users/1/abc123", {
        method:"delete",
      })
      .expect("status", 204);
  });
});
