Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $('<li>');
  $li.addClass('poke-list-item');
  $li.html(pokemon.escape('name') + ' ' + pokemon.escape('poke_type'));
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  this.pokes.fetch({
    success: function() {
      this.pokes.each(this.addPokemonToList, this);
    }.bind(this)
  });
};
