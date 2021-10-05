const router = require('express').Router();
const booksController = require('../../controllers/booksController');

router.route('/')
  .get(booksController.findAll)

  router.route('/search')
  .get(booksController.search);
  
  

router.route('/addbook/:author')
  .post(booksController.create);

router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.delete);

module.exports = router;
