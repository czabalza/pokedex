Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $div = $('<div>');
  $div.addClass('detail');
  $div.append('<img src=' + pokemon.escape('image_url') + '>');
  var $ul = $('<ul>');

  pokemon.keys().forEach(function(key) {
    if (key === 'image_url') {
      return;
    }
    var $li = $('<li>');
    $li.html(key + ": " + pokemon.escape(key));
    $ul.append($li);
  });

  $div.append($ul);
  var $toyUl = $('<ul>');
  $toyUl.html('TOYS');
  $toyUl.addClass('toys');
  $div.append($toyUl);
  pokemon.fetch({
    success: function () {
      // pokemon.toys().forEach(function(toy) {
      //   this.addToyToList(toy);
      //   // console.log(toy);
      // }.bind(this));
      this.renderToysList(pokemon.toys());
    }.bind(this)
  });

  this.$pokeDetail.empty();
  this.$pokeDetail.append($div);
  this.$toyDetail.empty();
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var pokeId = $(event.currentTarget).data('id');
  this.renderPokemonDetail(this.pokes.get(pokeId));
};
