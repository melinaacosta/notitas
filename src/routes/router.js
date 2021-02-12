const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");


router.get("/", controller.index); //MOSTRAR EL FORM DEL INDEX DE CREACION Y PELICULAS CREADAS
router.post("/crear", controller.create); //CREAMOS UNA NOTA
router.get("/detail/:id", controller.detail); //MOSTRAR EL FORM DE EDICION DE 1 NOTA
router.put("/detail/:id", controller.saveEdit); //EDICION DE 1 NOTA
router.delete("/delete/:id",controller.delete); //BORRADO SOFT DE 1 NOTA


module.exports = router;