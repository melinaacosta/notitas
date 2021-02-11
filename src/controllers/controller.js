const db = require("../database/models/index")



module.exports = {
    index: function(req,res){
        db.Nota.findAll().then(function(notas){
            return res.render("index", {notas})
         })
    },
    create: function(req,res){
        db.Nota.create({
            titulo: req.body.title,
            texto: req.body.description
        }).then(function(){
            res.redirect("/")
         })
    },
    detail: function(req,res){
        res.render("../views/detail")
    },
    saveEdit: function(req,res){
       
    },
    
    delete: function(req,res){
        
    }
}