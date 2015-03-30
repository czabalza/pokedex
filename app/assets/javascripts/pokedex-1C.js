Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var newPoke = new Pokedex.Models.Pokemon();
  newPoke.save(attrs, {
    success: function() {
      this.pokes.add(newPoke);
      this.addPokemonToList(newPoke);
      callback(newPoke);
      1 + 1
      2 + 2
    }.bind(this)
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var pokemon = $(event.currentTarget).serializeJSON();
  this.createPokemon(pokemon, this.renderPokemonDetail.bind(this));
};
