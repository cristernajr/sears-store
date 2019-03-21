// Aplicación.

var app = angular.module('storeApp', ['ngRoute']);

// Rutas.

app.config(function($routeProvider) 
{
    $routeProvider
        .when('/', 
        {
            templateUrl : 'views/productsList.html',
            controller  : 'productsCtrl',
            controllerAs  : 'products',
        });
});

// Factories.

app.factory("getProducts", function()
{
    var imageURL = "views/img/";

    // Products list.

    var productsList = 
    [
        {id:1,image:imageURL+"8.jpg",name:"Camisa Docker, Regular Fit",description:"Ideal para aquellos que les gusta vestir casual, sin perder el buen estilo",brand:"dockers",price:"899",gender:"caballeros"},
        {id:2,image:imageURL+"1.jpg",name:"Vestido Fragil, Escote Redondo",description:"Fragil es una marca ideal para lucir sexy y segura de sí misma, con sus diseños innovadores y únicos",brand:"fragil",price:"469",gender:"damas"},
        {id:3,image:imageURL+"3.jpg",name:"Bolso Mod. K12433L01",description:"Bolsa al hombro Chica (Across body)",brand:"kipling",price:"1899",gender:"damas"},
        {id:4,image:imageURL+"7.jpg",name:"Chamarra Fukka, con Capucha",description:"FUKKA, trae en exclusiva de Sears diseños innovadores y únicos que seguro te encantarán",brand:"fukka",price:"509",gender:"caballeros"},
        {id:5,image:imageURL+"9.jpg",name:"Reloj Mod. M0256273606100",description:"Reloj para caballero Multifort Chronografo, con caja en PVD negro, 44MM, caratula gris atrancita",brand:"mido",price:"29900",gender:"caballeros"},
        {id:6,image:imageURL+"2.jpg",name:"Reloj Mod. C060722",description:"Reloj Dama, L Circle of Time, Caja acero inoxidable 30mm Oro Rosa, Doble cristal de zafiro curvo",brand:"citizen",price:"6469",gender:"damas"},
        {id:7,image:imageURL+"11.jpg",name:"Choclo de Piel Mod. M0005F",description:"Choclo de piel con forro de piel y suela sintética. Ajuste con agujetas y construcción pegado. Fabricado en Italia",brand:"dasthon",price:"2349",gender:"caballeros"},
        {id:8,image:imageURL+"4.jpg",name:"Reloj Mod. C060727",description:"Reloj Dama, Silhoutte Crystal, Caja acero inoxidable 29mm dorado, Cristal mineral, Banda acero inoxidable dorado",brand:"citizen",price:"6265",gender:"damas"},
        {id:9,image:imageURL+"5.jpg",name:"Zapatilla Proto Piel Red",description:"Zapatilla Proto Piel Red Mod. SMW3688",brand:"steve madden",price:"2099",gender:"damas"},
        {id:10,image:imageURL+"12.jpg",name:"Bota Mod. 2747C",description:"Bota Mod. 2747C",brand:"maschi",price:"2299",gender:"caballeros"},
        {id:11,image:imageURL+"10.jpg",name:"Reloj Mod. C060694",description:"Reloj Caballero, Navihawk AT, Caja acero inoxidable Oro Rosa 48mm, Cristal Mineral Antirreflejante, Banda acero inoxidable Oro Rosa",brand:"citizen",price:"14039",gender:"caballeros"},
        {id:12,image:imageURL+"6.jpg",name:"Zapatilla Abierta Presidnt",description:"Zapatilla Abierta Presidnt con tiras Mod. SMW4000",brand:"steve madden",price:"1949",gender:"damas"},
    ];

    return productsList;
});

// Filtros.

app.filter('getById', function() 
{
  return function(input, id) 
  {
    var i=0, len=input.length;
    for (; i<len; i++) 
    {
      if (+input[i].id == +id) 
      {
        return input[i];
      }
    }
    return null;
  }
});

// Controladores.

app.controller('productsCtrl', function($filter, getProducts) 
{
    // Get products.

    var products = this;
    products.list = getProducts;

    // Select gender.

    products.genderSelected = "Todo";

    // Change gender products.

    products.changeProductList = function()
    {
        products.searchMaster = (products.genderSelected == "Todo" ? "":products.genderSelected);
    };

    // Search products.

    products.search = function()
    {
        products.searchMaster = products.searchInput;
    };

    // Products details.

    products.details = function(id)
    {
        products.quantity = 1;
        products.size = "CH";
        products.master = {};
        products.master = angular.copy(products.list);
        products.master = $filter('getById')(products.master, id);
    }
});