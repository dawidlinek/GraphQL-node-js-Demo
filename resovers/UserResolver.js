import fs from "fs";

const require = (filepath, encoding = "utf8") =>
  JSON.parse(fs.readFileSync(filepath, { encoding }));

let { userData } = require("./user-data.json");

export const UserResolver = (parent, args, context, info) => {
  let outputData = userData;

  if (args.gender) {
    outputData = outputData.filter((user) => user.gender == args.gender);
  }
  if (args.search) {
    outputData = outputData.filter((user) => {
      return flattenObject(user).some((value) => {
        if (args.strictSearch) {
          return value == args.search;
        } else {
          return value.includes(args.search);
        }
      });
    });
  }
  if (args.limit) {
    outputData = outputData.slice(0, args.limit);
  }
  return outputData;
};

var flattenObject = function (ob) {
  var toReturn = {};

  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if (typeof ob[i] == "object") {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + "." + x] = String(flatObject[x]);
      }
    } else {
      toReturn[i] = String(ob[i]);
    }
  }
  return Object.values(toReturn);
};
