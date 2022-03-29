const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const yahooFinance = require("yahoo-finance2").default;

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/stock", (req, res) => {
  const symbol = req.query["0"];
  const date = req.query["1"];
  const queryDate = { period1: req.query[1] };

  async function getOhlc() {
    const result = await yahooFinance.historical(symbol, queryDate);
    return result;
  }
  getOhlc()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => console.log(err));
});

app.get("/stocks", (req, res) => {
  const symbols = req.query["0"];
  const date = req.query["1"];
  const queryDate = { period1: date };
  const stocksDataArr = [];

  async function getOhlc() {
    const queryOptions = { period1: "2022-02-1" };

    for (const symbol of symbols) {
      const result = await yahooFinance.historical(symbol, queryOptions);
      stocksDataArr.push(result);
    }
    return stocksDataArr;
  }
  getOhlc()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => console.log(err));
});

app.get("/quotes", (req, res) => {
  async function getQuotes() {
    const result = await yahooFinance.quote(req.query[0]);
    return result;
  }

  getQuotes()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => res.send(err));
});

app.get("/search", (req, res, next) => {
  async function getQuery() {
    const result = await yahooFinance.search(req.query[0]);
    return result;
  }
  getQuery().then((resp) => {
    res.send(resp);
  });
});

app.listen(port, () => {
  console.log("Server is running");
});
