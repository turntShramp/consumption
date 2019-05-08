const orm = require("../config/orm.js");

let thing = {
    all: cb => {
        orm.all("things", res => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.create("things", cols, vals, res => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update("things", objColVals, condition, res => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete("things", condition, res => {
            cb(res);
        });
    }
};

module.exports = thing;