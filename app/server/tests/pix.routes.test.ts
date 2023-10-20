import request from "supertest";
import app from "../src/server";
import { IPixTransfer } from "../src/interfaces/pix.interface";

describe("Testes das rotas de Pix", () => {
  it("Deve realizar uma transferência Pix", async () => {
    const pixData = {
      account: "senderAccountId", // Substitua pelo ID real da conta remetente
      key: "recipientPixKey", // Substitua pela chave Pix do destinatário
      amount: 100, // Defina o valor correto
    };

    const response = await request(app).post("/pix").send(pixData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("statusCode", "SUCCESS");
  });

  it("Deve lidar com transferência Pix quando a conta do remetente não existe", async () => {
    const invalidPixData = {
      account: "nonExistentAccountId",
      key: "recipientPixKey",
      amount: 100,
    };

    const response = await request(app).post("/pix").send(invalidPixData);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("statusCode", "PIX_USER_NOT_FOUND");
  });

  it("Deve lidar com transferência Pix quando a chave Pix do destinatário não é encontrada", async () => {
    const invalidPixData = {
      account: "senderAccountId", // Substitua pelo ID real da conta remetente
      key: "nonExistentPixKey", // Substitua por uma chave Pix que não existe
      amount: 100,
    };

    const response = await request(app).post("/pix").send(invalidPixData);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("statusCode", "PIX_NOT_FOUND");
  });

  it("Deve lidar com transferência Pix quando o saldo é insuficiente", async () => {
    const insufficientBalancePixData = {
      account: "senderAccountId", // Substitua pelo ID real da conta remetente
      key: "recipientPixKey", // Substitua pela chave Pix do destinatário
      amount: 1000000, // Um valor que exceda o saldo da conta
    };

    const response = await request(app)
      .post("/pix")
      .send(insufficientBalancePixData);

    expect(response.status).toBe(402);
    expect(response.body).toHaveProperty("statusCode", "NO_MONEY");
  });

  it("Deve retornar status 400 para uma transação PIX inválido", async () => {
    const invalidTransaction: Partial<IPixTransfer> = {
      amount: 200,
    };
    const response = await request(app).post("/pix").send(invalidTransaction);

    expect(response.status).toBe(400);
  });

  it("Deve retornar status 500 para um erro interno no servidor", async () => {
    const response = await request(app).get("/pix/errorRoute");
    expect(response.status).toBe(500);
  });
});
