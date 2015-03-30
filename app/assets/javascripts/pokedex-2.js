Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $('<li>');
  $li.addClass('toy-list-item');
  $li.html(toy.escape('name') + ': happiness = ' + toy.escape('happiness') + ' $' + toy.escape('price'));
  this.$pokeDetail.find('ul.toys').append($li);
  $li.data('id', toy.get('id'));
  $li.data('pokemon-id', toy.get('pokemon_id'));
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $div = $('<div>');
  $div.addClass('detail');
  $div.append('<img src=' + toy.escape('image_url') + '>');
  var $ul = $('<ul>');
  toy.keys().forEach(function(key) {
    if (key === 'image_url') {
      return;
    }
    var $li = $('<li>');
    $li.html(key + ": " + toy.escape(key));
    $ul.append($li);
  });
  $div.append($ul);
  var $select = $('<select>');
  $select.data('pokemon-id', toy.get('pokemon_id'));
  $select.data('toy-id', toy.get('id'));
  this.pokes.each(function(pokemon) {
    var $option = $('<option>');
    $option.val(pokemon.escape('id'));
    $option.html(pokemon.escape('name'));
    if (pokemon.get('id') === toy.get('pokemon_id')) {
      $option.prop('selected', true);
    }
    $select.append($option);
  }, this);
  $div.append($select);
  this.$toyDetail.empty();
  this.$toyDetail.append($div);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  event.preventDefault();
  var toyId = $(event.currentTarget).data('id');
  var pokeId = $(event.currentTarget).data('pokemon-id');
  this.renderToyDetail(this.pokes.get(pokeId).toys().get(toyId));
};
