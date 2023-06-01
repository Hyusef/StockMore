const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const yahooFinance = require("yahoo-finance2").default;
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

app.set("port", port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
// app.use(express.static("build"));

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
  console.log(date)
  const stocksDataArr = [];
  async function getOhlc() {
    const queryOptions = { period1: date};
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

app.get('/trending', async (req, res) => {
  const queryOptions = { count: 5, lang: 'en-US' };
  const result = await yahooFinance.trendingSymbols('US', queryOptions);
  res.send(result)
})
app.get('/', async (req, res) => {
})

app.get("/quotes", (req, res) => {
  async function getQuotes() {
    const result = await yahooFinance.quoteSummary(req.query[0]);
    return result;
  }

  getQuotes()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => res.send(err));
  console.log(' function call')
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

app.get("/news", (req, res, next) => {
  const page = req.query["0"];
  async function getNews() {
    const result = await axios(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pagesize=10&page=${page}`
    );
    return result;
  }
  getNews()
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => res.send(err));
});

app.get("/biznews", (req, res, next) => {
  const options = {
    url: 'https://biztoc.p.rapidapi.com/news/latest',
    headers: {
      'X-RapidAPI-Key': process.env.NEWZ_API_KEY,
      'X-RapidAPI-Host': 'biztoc.p.rapidapi.com'
    }
  };

  const page = req.query["0"];
  async function getNews() {
    const result = await axios.request(options)
    return result;
  }
  const skip = (page - 1) * 12;

  getNews()
    .then((resp) => {
      res.send(resp.data.slice(skip, skip + 12));
    })
    .catch((err) => res.send(err));
});


app.get("/get-initial-company-data", async (req, res, next) => {
  const keys = Object.keys(req.query);
  const companiesData = await Promise.all(keys.map(async (e) => {
    const company = req.query[e];
    const result = await yahooFinance.quote(company);
    return result;
  }));
  res.send(companiesData);
});



app.listen(port, () => {
  console.log("Server is running on port", port);
});
