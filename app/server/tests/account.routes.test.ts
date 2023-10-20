import request from "supertest";
import app from "../src/server";
import { IAccount } from "../src/interfaces/account.interface";

describe("Testes das rotas de accounts", () => {
  it("Deve criar uma nova conta", async () => {
    const newAccount = {
      user: "userId", // Substitua pelo ID real do usuário
      category: "CONTA_CORRENTE",
    };

    const response = await request(app).post("/account").send(newAccount);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("account");
  });

  it("Deve obter uma conta existente", async () => {
    const accountId = "validAccountId";

    const response = await request(app).get(`/account/${accountId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", accountId);
  });

  it("Deve atualizar uma conta existente", async () => {
    const accountId = "validAccountId";

    const updatedAccount = {
      category: "CONTA_POUPANCA",
    };

    const response = await request(app)
      .put(`/account/${accountId}`)
      .send(updatedAccount);

    expect(response.status).toBe(200);
  });

  it("Deve excluir uma conta existente", async () => {
    const accountId = "validAccountId";

    const response = await request(app).delete(`/account/${accountId}`);

    expect(response.status).toBe(200);
  });

  it("Deve retornar status 400 para uma conta inválido", async () => {
    const invalidAccount: Partial<IAccount> = {
      category: "CONTA_CORRENTE",
    };
    const response = await request(app).post("/account").send(invalidAccount);

    expect(response.status).toBe(400);
  });

  it("Deve retornar status 404 para uma conta inexistente", async () => {
    const accountId = "nonExistentAccountId";
    const response = await request(app).get(`/account/${accountId}`);
    expect(response.status).toBe(404);
  });

  it("Deve retornar status 500 para uma conta inexistente", async () => {
    const response = await request(app).get(`/account/123edsa`);
    expect(response.status).toBe(500);
  });
});
