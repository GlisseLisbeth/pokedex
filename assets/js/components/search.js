'use strict';
// const pokemonItem = (update) =>{
//   const colPoke = $('<div class="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-2 col-xs-offset-1"></div>');
//   const linkPoke = $('<a href="#"></a>');
//   const imgPoke = $('<img class="img-responsive" src="assets/img/015.png" alt="Pokemon">');
//   linkPoke.append(imgPoke);
//   colPoke.append(linkPoke);
//
//   return colPoke;
// }

const Search = (update) =>{
  const search = $('<div class="container-fluid"></div>');
  const row = $('<div class="search row "></div>');
  const col = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
  const inputGroup = $('<div class="input-group"></div>');
  const span = $('<span class="input-group-btn"></span>')
  const button= $('<button class="btn btn-default" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>');
  const input = $('<input type="text" class="form-control">');
  const pokemons = $('<div class="pokemons row"></div>');

  //Probando
  const colPoke = $('<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>');
  const linkPoke = $('<a href="#"></a>');
  const figPoke = $('<figure class="fig"></figure>');
  const imgPoke = $('<img class="img-responsive" src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="Pokemon">');
  const infoPoke = $('<div class="info"><div class="info-icon"><span><img class="icon-img" src="assets/icon/pokeball_gray.png"></span><span><img class="icon-img" src="assets/icon/valentines-heart.png"></span><span><img class="icon-img" src="assets/icon/data.png"></span></div><div><span>Pokemons</span></div>');
  span.append(button);
  inputGroup.append(span);
  inputGroup.append(input);
  col.append(inputGroup);
  row.append(col);
  search.append(row);

  //Probando
  figPoke.append(imgPoke);
  figPoke.append(infoPoke);
  linkPoke.append(figPoke);
  colPoke.append(linkPoke);
  pokemons.append(colPoke);
  search.append(pokemons);

  input.on('keyup',(e) => {
    //const filter = filterPokemons(state.pokemons, input.val());
    //reRender(pokemons,filter,update);
  });
  button.on('click',(e) => {
    //const filter = filterPokemons(state.pokemons, input.val());
    //reRender(pokemons,filter,update);
  });
  // reRender(pokemons,state.pokemons,update);
  //reRender(pokemons, update);

  return search;
}

const reRender = (content, update) =>{
  //content.empty();

  // filter.forEach((elemento) =>{
  //    console.log(elemento)
  //    content.append(pokemonItem(elemento, update));
  //  });
  //  if(filter.length == 0){
  //    content.empty();
  //    return content.append('<h1>"Elemento no encontrado"</h1>');
  //  }
}
