Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $div = $('<div>');
  $div.addClass('detail');
  $div.append('<img src=' + pokemon.escape('image_url') + '>');
  var $ul = $('<ul>');

  pokemon.keys().forEach(function(key) {
    var $li = $('<li>');
    $li.html(key + ": " + pokemon.escape(key));
    $ul.append($li);
  });

  $div.append($ul);
  this.$pokeDetail.empty();
  this.$pokeDetail.append($div);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var pokeId = $(event.currentTarget).data('id');
  this.renderPokemonDetail(this.pokes.get(pokeId));
};
