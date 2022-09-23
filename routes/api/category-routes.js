const router = require('express').Router();
const models = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await models.Category.findAll({
      include: [{ model: models.Product }]
    });
    res.json(categoryData);
  } catch(err) {
    res.json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await models.Category.findByPk(req.params.id, {
      include: [{ model: models.Product }]
    });
    res.json(categoryData);
  } catch(err) {
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await models.Category.create(req.body);
  res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await models.Category.update(
      {
        category_name: req.body.category_name,
      }, 
      { 
        where: { id: req.params.id }
      }
    );
    return res.json(categoryData);
  } catch(err) {
    res.json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await models.Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(categoryData);
});

module.exports = router;
