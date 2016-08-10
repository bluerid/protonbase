module.exports = {
  get_index : function(req, res) {
    res.render('create-food', { title: 'Create Food' });
  },
}