const router = require("express").Router();
const verify = require("../verifyToken");

//import list Controller
const {
  createList,
  deleteList,
  getList,
  deleteAllList,
} = require("../controller/listController");

//Function create list
router.post("/", verify, createList);

//Function delete list
router.delete("/", verify, deleteList);

//Function delete all list
router.delete("/delete", verify, deleteAllList);

//Function get list
router.get("/", verify, getList);

module.exports = router;
