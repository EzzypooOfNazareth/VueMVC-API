const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/good-sample', function (req, res) {
 return res.json({
    accountName: "Ezzypoo",
    fullName: "Ezra Moore",
    accountCode: "ACAU2020",
    lobName: "Commercial Auto",
    insureAgency: "Berkshire Hathaway Sample Agency Inc.",
    startDate: "04/01/2019",
    expirationDate: "04/01/2020",
    status: "Valid"
 });
});

app.get('/bad-sample', function (req, res) {
    return res.json({
        accountName: "Bad Badington",
        fullName: "Dirk Manly",
        accountCode: "DMHO2020",
        lobName: "Homeowner's",
        insureAgency: "Berkshire Hathaway Sample Agency Sup.",
        startDate: "01/01/2018",
        expirationDate: "01/01/2019",
        status: "Expired"
    })
});

console.log('Starting Server...')
app.listen(8080);