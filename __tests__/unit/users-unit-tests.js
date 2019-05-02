const expect = require("chai").expect;
const assert = require("chai").assert;
const UserStock = require("./../../models/userstock");
const Stocks = require('./../../models/stocks');
const Users = require('./../../models/users');

describe("userstock", function(){
  describe("stock", function(){
    it("should return error if not a string", async function(){
      try {
        let track = new UserStock({stock: "3*&^"});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("Stock must be a String");
      }
    });

    it("should pass if is string", async function(){
        let myStock = new UserStock({stock:"abc"});
        return assert.isString(myStock.stock);
    });
  });
});

describe("stocks", function(){
  describe("stock", function(){
    it("should return error if not a string", async function(){
      try {
        let track = new Stocks({name: "3#&"});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("Name must be a String");
      }
    });

    it("should pass if is string", async function(){
        let mystock = new Stocks({name:"abc"});
        return assert.isString(mystock.name);
    });
  });
});

describe("user table", function(){
  describe("user", function(){
    it("should return error if not a string", async function(){
      try {
        let track = new Users({email: "afkld"});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("Email must be an email");
      }
    });

    it("should pass if is string", async function(){
        let mEmail = new Users({email:"abc@d.com"});
        return assert.isString(mEmail.email);
    });
  });
});
