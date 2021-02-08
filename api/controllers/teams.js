var Teams = require('../models/teams.js')

module.exports.listar = () => {
    return Teams
    .find()
    .select('_id team pitch1 pitch2 techPitch businessReport techReport')
    .exec()
}

module.exports.consultar = id => {
    return Teams
        .findOne({_id: id})
        .exec()
}

module.exports.membro = (id,member) =>{
    return Teams
    .find({_id : id, members: {$elemMatch: {member}}})
    .exec()
}

module.exports.inserir = t => {
    var novo = new Teams(t)
    return novo.save()
}

module.exports.remover = function(id){
    return Teams.deleteOne({_id: id})
}