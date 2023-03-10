

module.exports = function(app) {
  const Ctrl = require('./products.controller');

  app.route('/products')
    .get(Ctrl.listAllProduct)
    .post(Ctrl.addProduct);

  app.route('/products/:id')
    .put(Ctrl.updateOne)
    .get(Ctrl.findProduct)
    .delete(Ctrl.deleteProduct)
    
};