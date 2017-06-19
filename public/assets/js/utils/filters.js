'use strict';

const filterPokemons = (objects,param, query) => {
  const filter=[];
  objects.forEach((element) =>{
    (objects.param.toUpperCase().indexOf(query.toUpperCase())>-1)?filter.push(element):null;
  });
 return filter;
}
