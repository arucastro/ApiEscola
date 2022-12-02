import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: { args: [3, 255], msg: 'Nome deve ter pelo menos 3 caracteres' },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: { args: [3, 255], msg: 'Sobrenome deve ter pelo menos 3 caracteres' },
        },
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'Email já existe',
        },
        defaultValue: '',
        validate: {
          isEmail: { msg: 'Email inválido' },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: { msg: 'Idade precisa ser um número inteiro' },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: { msg: 'Peso invállido' },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: { msg: 'Altura invállida' },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
