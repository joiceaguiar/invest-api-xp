const { Client } = require('../database/models');

const createDeposit = async ({ clientId, value }) => {
  const client = await Client.findOne({ where: { id: clientId } });

  const newBalance = Number(value) + Number(client.balance);

  if (value <= 0) {
    return { status: 400, response: { message: 'The value you entered is not valid' } };
  };

  const updateBalanceClient = await Client.update(
    { balance: newBalance }, { where: { id: clientId } });
  
  return { status: 201, response: { CodCliente: clientId, Valor: value } };
};

const createWithdrawal = async ({ clientId, value }) => {
  const client = await Client.findOne({ where: { id: clientId } });

  const newBalance = Number(client.balance) - Number(value);

  if (value <= 0 || value > client.balance) {
    return { status: 400, response: { message: 'The value you entered is not valid' } };
  };

  const updateBalanceClient = await Client.update(
    { balance: newBalance }, { where: { id: clientId } });

  return { status: 201, response: { CodCliente: clientId, Valor: value } };
};

const getByClientId = async (clientId) => {
  const client = await Client.findOne({ where: { id: clientId } });

  if (!client) {
    return { status: 404, response: { message: 'Client does not exist' } };
  };
  
  return { status: 200, response: { CodCliente: clientId, Saldo: client.balance } };
};

module.exports = {
  createDeposit,
  createWithdrawal,
  getByClientId,
};
