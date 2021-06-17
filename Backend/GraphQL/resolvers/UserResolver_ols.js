import fs from "fs";

const require = (filepath, encoding = "utf8") =>
  JSON.parse(fs.readFileSync(filepath, { encoding }));

// let { userData } = require("./user-data.json");
let userData = [
  {
    gender: "male",
    name: { title: "Monsieur", first: "Mohamed", last: "Fontai" },
    location: {
      street: { number: 6873, name: "Place de L'Abbé-Franz-Stock" },
      city: "Bulle",
      state: "Bern",
      country: "Switzerland",
      postcode: 9698,
      coordinates: { latitude: "-51.0187", longitude: "-91.7199" },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "mohamed.fontai@example.com",
    login: {
      uuid: "b5ca323b-2f2b-4144-8615-da19ff5b5e2c",
      username: "biggoose848",
      password: "genesis1",
      salt: "k7jSfstH",
      md5: "ef4c89793563f589d6ecc58d50c0c5d3",
      sha1: "29d7a87c3239efa8472c27e8033b0e7e1fac96d6",
      sha256:
        "e21885ad0d9318a39224ff4267aff3f73cb02c46013c896e7d6f137471de66a5",
    },
    dob: { date: "1980-07-15T22:13:18.671Z", age: 41 },
    registered: { date: "2003-08-27T20:50:00.793Z", age: 18 },
    phone: "079 373 91 75",
    cell: "076 896 92 31",
    id: { name: "AVS", value: "756.0480.1562.19" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Jeff", last: "Dixon" },
    location: {
      street: { number: 1223, name: "Station Road" },
      city: "Ripon",
      state: "Cheshire",
      country: "United Kingdom",
      postcode: "IW44 7HG",
      coordinates: { latitude: "8.0275", longitude: "-65.5671" },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "jeff.dixon@example.com",
    login: {
      uuid: "deaf3621-7e03-48a3-ae90-7331cb1e8606",
      username: "beautifulpanda967",
      password: "hakr",
      salt: "IyaAh65a",
      md5: "711ca7b61c93e3fb67f9578407a6524f",
      sha1: "c5e609ac1b9f6e92ead336e909e4d251658eafbf",
      sha256:
        "0a2795f4f62c4e4e6ab436416b6bc6e4f1d0614b0fa881ad67896fc7ee6e3157",
    },
    dob: { date: "1985-06-29T13:14:31.234Z", age: 36 },
    registered: { date: "2008-03-06T18:47:59.382Z", age: 13 },
    phone: "016977 9256",
    cell: "0714-956-693",
    id: { name: "NINO", value: "HL 91 06 87 E" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    },
    nat: "GB",
  },
];
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
