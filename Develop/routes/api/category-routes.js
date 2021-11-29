const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({}).then(function(data) {
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its id value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
  include: [Product],
})
.then(function(category) {
    res.json(category)
  })
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
