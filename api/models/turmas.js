'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, {
      foreignKey: 'turmas_id'
    })
    //processo reverso de referencia de chaves estrangeiras
    Turmas.belongsTo(models.Pessoas)  //Turmas pertence a tabela pessoas(chave estrangeira)
    Turmas.belongsTo(models.Niveis)  //Turmas pertence a tabela Niveis(chave estrangeira)
  };
  return Turmas;
};