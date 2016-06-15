angular.module('myapp.inventario').
factory('IntentarioService', ['localStorageService', function(localStorageService){
  if(localStorageService.get('items') === undefined){
    localStorageService.set('items', []);
  }

  var
    saveItem = function(item){
      var items = localStorageService.get('items');
      items.push(item);
      localStorageService.set('items', items);
    },

    getItem = function(index) {
      return localStorageService.get('items')[index];
    },

    getItems = function() {
      return localStorageService.get('items');
    },

    borrarItem = function(index) {
      var items = localStorageService.get('items');
      items.splice(index, 1);
      localStorageService.set('items', items);
    };

    return {
      saveItem: saveItem,
      getItem: getItem,
      getItems: getItems,
      borrarItem: borrarItem
    };

}]);
