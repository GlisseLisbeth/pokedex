'use strict';

const pokemonDetails = (update) => {
  const colPoke = $('<div class="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-2 col-xs-offset-1"></div>');
  const imgPoke = $('<img class="img-responsive" src="img/015.png" alt="Pokemon">');

  colPoke.append(imgPoke);

  return colPoke;
}
