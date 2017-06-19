'use strict';

const pokemonDetails = (pokemon, update) => {

  console.log(pokemon);
  const modal = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  </div>');
  const modalDialog = $('<div class="modal-dialog" role="document"></div>');
  const modalDescription = $('<div class="modal-pokedescription"></div>')
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"></div>');
  const modalBody = $('<div class="modal-body"></div>');
  const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const modalTitle = $('<h4 class="modal-title" id="myModalLabel"></h4>');
  const containermodal = $('<div class="container container-modal"></div>');
  const row = $('<div class="row"></div>');
  const colDetailsContainer = $('<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>');
  const pokeDetailsContainer = $('<div class="pokeDetailsContainer"></div>');
  const colDetailDescription = $('<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7"></div>');
  const pokeDetailsDescription = $('<div class="row pokeDetailsDescription"></div>');
  const description = $('<p class="description"></p>');
  const property = $('<div class="property"></div>');

  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(modalHeader);
  modalContent.append(modalBody);
  modalHeader.append(buttonclose);
  modalHeader.append(modalTitle);
  containermodal.append(row);
  colDetailsContainer.append(pokeDetailsContainer);
  row.append(colDetailsContainer);
  colDetailDescription.append(pokecolDescription);
  row.append(colDetailDescription);
  colDetailDescription.append(description);
  colDetailDescription.append(property);


  const tallness = $('<p>Altura</p>');
  const textTallness = $('<span class="tallness"></span>');
  const weighting = $('<p>Peso</p>');
  const textWeighting = $('<span class="weighting"></span>');
  const gender = $('<p>Sexo</p>');
  const textGender = $('<span class="gender"></span>');
  colDetailDescription.append(tallness);
  colDetailDescription.append(textTallness);
  colDetailDescription.append(weighting);
  colDetailDescription.append(textWeighting);
  colDetailDescription.append(gender);
  colDetailDescription.append(textGender);

  description.append(colDetailDescription);
  const category = $('<p>Categoria</p>');
  const textCategory = $('<span class="categoria"></span>');
  const abilities = $('<p>Habilidad</p>');
  const textAbilities= $('<span class="habilidad"></span>');
  colDetailDescription.append(category);
  colDetailDescription.append(textCategory);
  colDetailDescription.append(abilities);
  colDetailDescription.append(textAbilities);

  property.append(colDetailDescription);

  modalBody.append(containermodal);

  return modal;
}
