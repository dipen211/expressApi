import * as express from 'express';
import * as bodyParser from 'body-parser';
const cors = require('cors');
var employee = require("./router/employee");
function loggerMiddleware(request: express.Request, response: express.Response, next) {
  next();
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use('/employee', employee);

app.listen(5000);