const team = {};
team._players = [];
team._games = [];

team._players.push({firstName: 'LeBron', lastName: 'James', age: 36});
team._players.push({firstName: 'Stephen', lastName: 'Curry', age: 33});
team._players.push({firstName: 'Kevin', lastName: 'Durant', age: 33});

team._games.push({opponent: 'Lakers', teamPoints: 110, opponentPoints: 105});
team._games.push({opponent: 'Bucks', teamPoints: 120, opponentPoints: 115});
team._games.push({opponent: 'Clippers', teamPoints: 105, opponentPoints: 100});

team.players = function() {
  return this._players;
};

team.games = function() {
  return this._games;
};
team.addPlayer = function(newFirstName, newLastName, newAge) {
  const newPlayer = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this._players.push(newPlayer);
};

team.addGame = function(newOpponent, newTeamPoints, newOpponentPoints) {
  const newGame = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this._games.push(newGame);
};
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players); 
team.addGame('Titans', 100, 98);
console.log(team.games);
