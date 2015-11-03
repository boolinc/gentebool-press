'use strict';

describe('Players', () => {

  it('Sort players', () => {
    var shuffler = require('..');
    console.log(shuffler([ 'Collazos, J.', 'Dorado, P.', 'Osorio, S.', 'Ponce, J.' ]));
  });
});
