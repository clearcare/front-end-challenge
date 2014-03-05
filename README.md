Checkers Challenge
===================

Using [AngularJS](http://angularjs.org/) create an 8x8 game of [Checkers](http://en.wikipedia.org/wiki/Draughts). You  can choose how far you'd like to take this excercise. We will be evaluating the results based on:

* Knowledge of AngularJS and conventions
* Complexity of logic
* Elegance of code and solutions
* Test coverage

Here are some guidelines on different levels of solutions:

* Level 1: New game button that puts pieces on the board and allows them to be moved
* Level 2: Enforcing that pieces can only be moved to legal spaces and determining when someone wins, no AI and you the player plays both colors.
* Level 3: A multiplayer turn based game using [Firebase](https://www.firebase.com/)
* Level 4: Implement AI so that the "computer" plays you.
    
For Level 3, using [Firebase](https://www.firebase.com/) with [Angularfire](https://www.firebase.com/quickstart/angularjs.html), both already in your app/bower_components and index.html, create a multiplayer turn based game of Checkers. For example, players login via GitHub, button supplied in the top right, players that are logged in via GitHub appear in a matchup panel and can create and join games. The server architecture can be accomplished with [Firebase](https://www.firebase.com/login/).


How to setup project
===================
1.  Install [Node.js](http://nodejs.org/).

    <code>$ curl http://npmjs.org/install.sh | sh</code>

2.  Install [Yeoman](http://yeoman.io/).
    
    <code>$ npm install -g yo</code>

3.  Fork this repo on GitHub.
4.  Start project using this command.

    <code>$ grunt serve</code>

5.  You should now see your starter template with Checkerboard.
6.  Make sure to write tests.
7.  Commit with good messages.
8.  Push your code back to GitHub and send us a pull request.


![alt text](https://raw.github.com/clearcare/front-end-challenge/master/screenshot.png "Template Image")
