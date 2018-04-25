
const Address = require("./address");
const logger = require("./logger");
const modules = require('./modules');

var address = new Address('ad1','ad2','Crawfordsville','IN',47933);
logger.Log(`City: ${address.City}`);

address.City = "Boontown";
logger.Log(`City: ${address.City}`);

//Create a new site.
var site = new modules.Site();
