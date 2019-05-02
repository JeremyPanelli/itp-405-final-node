const expect = require("chai").expect;
const assert = require("chai").assert;
const UserStock = require("./../../models/userstock");
const Stocks = require('./../../models/stocks');
const Users = require('./../../models/users');

describe("userstock", function(){
  describe("stock", function(){
    it("should return error if not a string", async function(){
      try {
        let track = new UserStock({stock: 3});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message);
      }
    });

    it("should pass if is string", async function(){
        let stock = new UserStock({stock:"abc"});
        return assert.isNumber(stock.stock);
    });
  });
});

describe("stocks", function(){
  describe("stock", function(){
    it("should return error if not a string", async function(){
      try {
        let track = new Stock({stock: 3});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message);
      }
    });

    it("should pass if is string", async function(){
        let stock = new Stock({stock:"abc"});
        return assert.isNumber(stock.stock);
    });
  });
});

describe("user table", function(){
  describe("user", function(){
    it("should return error if not a string", async function(){
      try {
        let track = new Users({stock: 3});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message);
      }
    });

    it("should pass if is string", async function(){
        let stock = new Users({stock:"abc"});
        return assert.isNumber(stock.stock);
    });
  });
});
