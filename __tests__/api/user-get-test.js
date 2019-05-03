const frisby = require("frisby");

describe("user", function(){
  it("should return a status 404 when user table id is not found", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/doesnotexist", {
        method:"get"
      })
      .expect("status", 404);
  });
  it("should return a status 200 when a table of all users is returned", function(){
    return frisby
      .fetch("http://localhost:8080/api/users", {
        method:"get",
      })
      .expect("status", 200);
  });
  it("should return a status 200 when a table is returned", function(){
    return frisby
      .fetch("http://localhost:8080/api/userstock", {
        method:"get",
      })
      .expect("status", 200);
  });

  it("should return a status 200 when the stocks table is returned", function(){
    return frisby
      .fetch("http://localhost:8080/api/stock", {
        method:"get",
      })
      .expect("status", 200);
  });

  it("should return a status 200 when the user's stocks table is returned", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1", {
        method:"get",
      })
      .expect("status", 200);
  });
  it("should return a status 404 when the user doesn't exist", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/-1", {
        method:"get",
      })
      .expect("status", 404);
  });
  it("should return a status 200 when the user posts a new stock to their profile", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1/abcdeff", {
        method:"post",
      })
      .expect("status", 200);
  });

  it("should return a status 200 when the user deletes a stock from their profile", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1/abcdeff", {
        method:"delete",
      })
      .expect("status", 204);
  });
  it("should return a status 422 with validation errors if request body is invalid", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1", {
        method:"PATCH",
        body:JSON.stringify({
          email:"not an email"
        })
      })
      .expect("status", 422)
      .expect("json", "errors[0].message", "Email must be an email")
  });
  it("should return a status 200 for patching the email", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1", {
        method:"PATCH",
        body:JSON.stringify({
          email:"abc@def.com"
        })
      })
      .expect("status", 200)
  });
  it("should return a status 422 with validation errors if stock name is invalid", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1/abcdeff", {
        method:"PATCH",
        body:JSON.stringify({
          stock:"359&&"
        })
      })
      .expect("status", 422)
      .expect("json", "errors[0].message", "Stock must be a String")
  });
  it("should return a status 200 for patching the stock", function(){
    return frisby
      .fetch("http://localhost:8080/api/users/1/dkl", {
        method:"PATCH",
        body:JSON.stringify({
          stock:"cool"
        })
      })
      .expect("status", 200)
  });
});
