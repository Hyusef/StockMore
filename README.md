<h1 align="center">
  <br>
  <a href="https://swisscalc.netlify.app/"><img src="https://user-images.githubusercontent.com/61304986/175812653-86d7a497-c977-4a42-991d-dd4ff157049b.png" alt="swisscalc" width="150"></a>

</h1>

<h4 align="center">Stockmore is a stock analysis tool. It has charts and a dashboard to view selected stocks </h4>




<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#about">About</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#challenges">Challenges</a> •
  <a href="#lessons-learned">Lessons Learned</a> •
  <a href="#improvements">Improvements</a> •
</p>

![screenshot](https://user-images.githubusercontent.com/61304986/172940151-2b223749-7797-452a-8d34-0e77d53b5d4e.gif)

## Key Features

 
* Add and remove stocks from dashboard.
* Compare Selected stocks in one graph.
* Works also with the main crypto coins.
* A news section for business news.


## About
<p> This is a stock analysis tool which can be used to analyse and compare stocks. It has a dashboard,a compare section using graphs, and a page to add the stocks using their symbols or the company name. Once a stock has been added some general info about that stock is shown in the dashboard along with the stock price of that day and a mini graph of that week's perfomance. If there are multiple stocks and they need to be compared the compare section can be used to view their prices over a longer time period on a chart. It also has an option to hide some of the stocks if you only want some of them. </p>

## Tech Stack
* React 
* React Query 
* React Router
* Node.js
* Material-UI 
* ChartJs 


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/hyusef/stockmore

# Go into the repository
$ cd stockmore

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Challenges
* The first challenge i had was using the Alphavantage API. It was very annoying and especially the search endpoint which wasn't very accurate. It also had a limit which would cause errors on certain occasions. I later installed an npm library based on yahoo finance data and it solved all my problems. 

* I also had problems using react query, but the documentation was good and i solved all the problems. This is my first project where i used it and I'm in love with it. It had many features which would take me a long time to do myself. 

* Another problem i had was figuring out how to implement the chart. I tried my best to find a formula that could put all of the different stocks with different ranges in one chart but that didn't work at all. I could not put a stock with a high cost in the same chart as one with a small cost as that would mess up the chart ranges. After alot of trying i found out that i had to use the difference in percentage between the current and the previous day  starting from day 0 and that worked as it deals with increase/decrease in percentages.





## Lessons Learned
* Before doing this project i didn't know much about stocks. Doing this project i was forced to learn more about stocks and i learnt alot. Like the different exchanges like NYSE and NASDAQ, private and public companies, IPO's, organizational structure of companies and many other things. This in and of itself is a lesson which is that coding an app doesn't just teach you about coding but you'll also learn many different things depending on the app you're making.

* I learnt about how to use react query, i learnt about pagination and how to make requests taking pagination into account, i learnt how to  visualise data using chartjs among other things.

## Improvements

* I don't think the first thing a user should see is text informing them that their dashboard is empty. I would therefore like to change that.
* The code is not as clear as it should be. I want to add some comments to explain the less clear parts.
* The reloading after adding a stock is unnecessary. Need to implement some sort of cache.


## You may also like...

- [Wordy](https://github.com/hyusef/wordy) - A word collage generator. 

## License

MIT

---



