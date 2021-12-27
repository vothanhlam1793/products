var Product = Backbone.Model.extend({
    urlRoot: "/api/products"
});

class CretaProduct extends Product {
    constructor(obj){
        super(obj);
    }
}

var CretaProducts = Backbone.Collection.extend({
    model: CretaProduct
});