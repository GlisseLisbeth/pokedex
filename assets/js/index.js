'use strict';

const render = (root) => {
  root.empty();
  const container = $('<div class="container text-center"></div>');
  container.append(Title(_=>render(root)));
  container.append(Search(_=>render(root)));
  root.append(container);
}

// const state = {
//   pokemons: null,
//   selectedPokemo: null
// };

$( _ => {
  const root = $('.root');
  render(root);
});
