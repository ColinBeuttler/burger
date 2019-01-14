var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "Insert into Burgers";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (typeof cb === 'function') {
        return cb(err, result);
      }
      throw new Error("CB must be a function.");
    });
  }
};

module.exports = orm;
