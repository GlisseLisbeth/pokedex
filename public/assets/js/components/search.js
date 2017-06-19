'use strict';
const pokemonItem = (pokemon, index, update) =>{
  const id = pokemon.pokemon_entries[index].entry_number;
  const name = pokemon.pokemon_entries[index].pokemon_especies[1].name;
  const colPoke = $('<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>');
  const linkPoke = $('<a href="#"></a>');
  const figPoke = $('<figure class="fig"></figure>');
  const imgPoke = $('<img class="img-responsive" src="http://serebii.net/art/th/'+id+'.png" alt="Pokemon">');
  const infoPoke = $('<div class="info"><div class="info-icon"><span><img class="icon-img" src="assets/icon/pokeball_gray.png"></span><span><img class="icon-img" src="assets/icon/valentines-heart.png"></span><span><img class="icon-img" src="assets/icon/data.png"></span></div><div><span>'+name+'</span></div>');

  figPoke.append(imgPoke);
  figPoke.append(infoPoke);
  linkPoke.append(figPoke);
  colPoke.append(linkPoke);

  return colPoke;
}

const Search = (data, update) =>{
  const search = $('<div class="container-fluid"></div>');
  const row = $('<div class="search row "></div>');
  const col = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
  const inputGroup = $('<div class="input-group"></div>');
  const span = $('<span class="input-group-btn"></span>')
  const button= $('<button class="btn btn-default" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>');
  const input = $('<input type="text" class="form-control">');
  const pokemons = $('<div class="pokemons row"></div>');


  span.append(button);
  inputGroup.append(span);
  inputGroup.append(input);
  col.append(inputGroup);
  row.append(col);
  search.append(row);

  input.on('keyup',(e) => {
    const filter = filterPokemons(data, index, input.val());
    reRender(pokemons,filter,index, update);
  });
  button.on('click',(e) => {
    const filter = filterPokemons(data, index, input.val());
    reRender(pokemons,filter,index, update);
  });
  reRender(pokemons,data,index, update);

  return search;
}

const reRender = (content, index, update) =>{
  content.empty();

  filter.forEach((elemento, index) =>{
        content.append(pokemonItem(elemento, index, update));
   });
   if(filter.length == 0){
     content.empty();
     return content.append('<h1>"Elemento no encontrado"</h1>');
   }
}
