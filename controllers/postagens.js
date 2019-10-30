cconst postagem = require('../models/postagem');

class Postagens { 

  async get () { 
    const postagens = await PostagemModel.find({});
    return postagens;
  }
  async getId (id) { 
    const postagem = await PostagemModel.find({_id: id});
    return postagem;
  }

  async create (postagemDTO){
    await new PostagemModel(postagemDTO).save();
  }

  async update (id, postagemDTO) {
    await PostagemModel.updateOne({_id: id}, postagemDTO);
  }

  async delete (id) {
    await PostagemModel.deleteOne({_id: id});
  }

}

module.exports = new Postagens();