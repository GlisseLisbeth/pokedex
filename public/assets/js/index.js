'use strict';

const render = (root) => {
  root.empty();
  const container = $('<div class="container text-center"></div>');
  container.append(Title(_=>render(root)));
  container.append(Search(_=>render(root)));
  root.append(container);
}


$( _ => {
  getPokedex((error, data) =>{
    if (error) console.log(error);
    //Aqui se obtiene la información de todos los pokemons del API :
    //http://pokeapi.co/api/v2/pokedex/1/
    console.log(data);
    const root = $('.root');
    render(root);

});
