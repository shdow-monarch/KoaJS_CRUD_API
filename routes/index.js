const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const ProductController = require("../controller/product");
const validateDto = require("../middleware/validationDto");
const duplicateProduct = require("../middleware/duplicateProduct");
const isExist = require("../middleware/isExist");
const checkId = require("../middleware/checkObjectId");

router.use(bodyParser());

router.get("/product", ProductController.getAllProduct);

router.post(
  "/product",
  validateDto,
  duplicateProduct,
  ProductController.createProduct
);

router.get("/product/:id", checkId, isExist, ProductController.getProduct);

router.put(
  "/product/:id",
  checkId,
  isExist,
  duplicateProduct,
  ProductController.updateProduct
);

router.delete(
  "/product/:id",
  checkId,
  isExist,
  ProductController.removeProduct
);

module.exports = router;
