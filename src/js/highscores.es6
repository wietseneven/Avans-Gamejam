import moment from "moment";
import _ from "lodash";

export default class highscores {
  constructor() {

    // predefine highscore array to prevent errors
    this.highscores = [];

    // bind functions to class
    this.getHighscores = this.getHighscores.bind(this);
    this.postHighscore = this.postHighscore.bind(this);
  }

  watchButton(button, type) {
    const btn = document.querySelector(button);
    switch (type) {
      case 'get':
        btn.addEventListener('click', this.getHighscores);
        break;
      case 'post':
        btn.addEventListener('click', this.postHighscore);
        break;
    }

  }

  getHighscores(e) {
    e.preventDefault();
    this.makeRequest("POST", "/getscores", null, (response) => {
      this.highscores = JSON.parse(response).scores;
      this.displayScores();
    });
  }

  postHighscore(e) {
    e.preventDefault();

    const score = {
      name: document.querySelector('#nameInput').value,
      score: document.querySelector('#scoreInput').value,
      date: Date.now()
    };

    // Only continue if name and score if defined
    if (!score.name || !score.score) {
      alert('Please fill in all fields!');
      return;
    }
    this.makeRequest("POST", "/postscore", JSON.stringify(score), (response) => {
      this.highscores = JSON.parse(response).scores;
      this.displayScores();
    });
  }

  createScoreTable(scores) {
    let scoreTable = '<table>';

    scoreTable +=
      `<tr>
        <th>Name</th>
        <th>Score</th>
        <th>Date</th>
      </tr>`;

    for (let score of scores) {
      let date = moment.unix(score.date / 1000).format("DD/MM/YYYY");

      scoreTable +=
        `<tr>
            <td>${score.name}</td>
            <td>${score.score}</td>
            <td>${date}</td>
        </tr>`;
    }

    scoreTable += '</table>';

    return scoreTable;
  }

  displayScores() {
    const scores = this.orderScores(this.highscores, 'score');
    let table = this.createScoreTable(scores);

    const location = document.querySelector('#tablegoeshere');
    location.innerHTML = table;
  }

  orderScores(scores, orderBy) {
    for (let score of scores) {
      score.score = Number(score.score);
    }
    const orderedScores = _.sortBy(scores, orderBy).reverse().slice(0, 10);
    return orderedScores;
  }

  makeRequest(type, url, arg, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(xmlHttp.responseText);
      } else if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
        alert('Something went wrong. Please try again');
      }
    };
    xmlHttp.open(type, url, true); // true for asynchronous
    xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xmlHttp.send(arg);
  }
}