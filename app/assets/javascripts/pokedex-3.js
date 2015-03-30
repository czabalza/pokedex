Pokedex.RootView.prototype.reassignToy = function (event) {
  var $select = $(event.currentTarget);
  // console.log('old-pokeId: ' + $select.data('pokemon-id'));
  // console.log('toyId: ' + $select.data('toy-id'));
  // console.log('new-pokeId: ' + $select.val());
  var oldPokemon = this.pokes.get($select.data('pokemon-id'));
  var toy = oldPokemon.toys().get($select.data('toy-id'));
  toy.set('pokemon_id', $select.val());

  toy.save({}, {
    success: function() {
      oldPokemon.toys().remove($select.data('toy-id'));
      this.renderToysList(oldPokemon.toys());
      this.$toyDetail.empty();
    }.bind(this)
  });
};

Pokedex.RootView.prototype.renderToysList = function (toys) {
  this.$pokeDetail.find(".toys").empty();
  toys.each(this.addToyToList, this);
};
