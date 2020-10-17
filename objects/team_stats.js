const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      }, 
      {
        firstName: 'Dominic',
        lastName: 'Peters',
        age: 32
      }, 
      {
        firstName: 'Suzie',
        lastName: 'Babes',
        age: 21
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 32,
        opponentPoints: 27
      },
      {
        opponent: 'West Ham',
        teamPoints: 21,
        opponentPoints: 58
      },
      {
        opponent: 'Arsenal',
        teamPoints: 23,
        opponentPoints: 54
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Delhi', 12, 22);
  team.addGame('Karachi', 25, 56);
  team.addGame('Calcutta', 56, 77);
  
  console.log(team.players);
  
  console.log(team.games);