'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Movie(data));
  root.append(wrapper);
}

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

$( _ => {

  const pokedexId = decodeURIComponent($.urlParam('id'));

  getPokedex(pokedexId,(error,data) => {
    if (error) console.log(error);

    console.log(data);
    const root = $("#root");
    render(root,data);
  });
});
