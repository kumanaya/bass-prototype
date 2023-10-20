import request from "supertest";
import app from "../src/server";
import { ITransaction } from "../src/interfaces/transaction.interface";

describe("Testes das rotas de transactions", () => {
  it("Deve criar uma nova transação de saque", async () => {
    const newTransaction = {
      account: "accountId", // Substitua pelo ID real da conta
      type: "WITHDRAW",
      amount: 100, // Defina o valor correto
    };

    const response = await request(app)
      .post("/transaction")
      .send(newTransaction);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("account", response.body);
  });

  it("Deve criar uma nova transação de depósito", async () => {
    const newTransaction = {
      account: "accountId", // Substitua pelo ID real da conta
      type: "DEPOSIT",
      amount: 200, // Defina o valor correto
    };

    const response = await request(app)
      .post("/transaction")
      .send(newTransaction);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("account", response.body);
  });

  it("Deve obter uma transação existente", async () => {
    const transactionId = "validTransactionId"; // Substitua pelo ID real

    const response = await request(app).get(`/user/${transactionId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", transactionId);
  });

  it("Deve retornar status 400 para uma transação inválido", async () => {
    const invalidTransaction: Partial<ITransaction> = {
      amount: 200,
    };
    const response = await request(app)
      .post("/account")
      .send(invalidTransaction);

    expect(response.status).toBe(400);
  });

  it("Deve retornar status 500 para um erro interno no servidor", async () => {
    const response = await request(app).get("/account/errorRoute");
    expect(response.status).toBe(500);
  });
});
