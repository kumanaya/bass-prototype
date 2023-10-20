import request from "supertest";
import app from "../src/server";
import { IUser } from "../src/interfaces/user.interface";

describe("Testes das rotas de usuário", () => {
  it("Deve criar um novo usuário", async () => {
    const newUser: IUser = {
      accountOnboardingType: "BANKACCOUNT",
      documentNumber: "1234567890",
      phoneNumber: "1234567890",
      email: "example@example.com",
      motherName: "Example Mother",
      fullName: "Example User",
      socialName: "Example Social Name",
      birthDate: "2000-01-01",
      address: {
        postalCode: "12345-678",
        street: "Example Street",
        number: "123",
        addressComplement: "Apt 123",
        neighborhood: "Example Neighborhood",
        city: "Example City",
        state: "Example State",
        longitude: "123.456",
        latitude: "78.910",
      },
      isPoliticallyExposedPerson: false,
    };

    const response = await request(app).post("/user").send(newUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
  });

  it("Deve obter um usuário existente", async () => {
    const userId = "validUserId"; // Substitua pelo ID real

    const response = await request(app).get(`/user/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", userId);
  });

  it("Deve atualizar um usuário existente", async () => {
    const userId = "validUserId"; // Substitua pelo ID real

    const updatedUser: IUser = {
      accountOnboardingType: "BANKACCOUNT",
      documentNumber: "1234567890",
      phoneNumber: "1234567890",
      email: "daniel@kumanaya.io", // Atualizando o email
      motherName: "Example Mother",
      fullName: "Example User",
      socialName: "Example Social Name",
      birthDate: "2000-01-01",
      address: {
        postalCode: "12345-678",
        street: "Example Street",
        number: "123",
        addressComplement: "Apt 123",
        neighborhood: "Example Neighborhood",
        city: "Example City",
        state: "Example State",
        longitude: "123.456",
        latitude: "78.910",
      },
      isPoliticallyExposedPerson: false,
    };

    const response = await request(app)
      .put(`/user/${userId}`)
      .send(updatedUser);

    expect(response.status).toBe(200);
  });

  it("Deve criar um novo usuário com documentNumber existente", async () => {
    const newUser: IUser = {
      accountOnboardingType: "BANKACCOUNT",
      documentNumber: "1234567890",
      phoneNumber: "1234567890",
      email: "example@example.com",
      motherName: "Example Mother",
      fullName: "Example User",
      socialName: "Example Social Name",
      birthDate: "2000-01-01",
      address: {
        postalCode: "12345-678",
        street: "Example Street",
        number: "123",
        addressComplement: "Apt 123",
        neighborhood: "Example Neighborhood",
        city: "Example City",
        state: "Example State",
        longitude: "123.456",
        latitude: "78.910",
      },
      isPoliticallyExposedPerson: false,
    };

    const response = await request(app).post("/user").send(newUser);

    expect(response.status).toBe(409);
    expect(response.body).toHaveProperty("statusCode", "USER_ALREADY_EXISTS");
  });

  it("Deve excluir um usuário existente", async () => {
    const userId = "validUserId"; // Substitua pelo ID real

    const response = await request(app).delete(`/user/${userId}`);

    expect(response.status).toBe(200);
  });

  it("Deve retornar status 404 para um usuário inexistente", async () => {
    const userId = "nonExistentUserId";
    const response = await request(app).get(`/user/${userId}`);
    expect(response.status).toBe(404);
  });

  it("Deve retornar status 400 para um pedido inválido", async () => {
    const invalidUser: Partial<IUser> = {
      email: "example@example.com",
    };
    const response = await request(app).post("/user").send(invalidUser);

    expect(response.status).toBe(400);
  });

  it("Deve retornar status 500 para um erro interno no servidor", async () => {
    const response = await request(app).get("/user/errorRoute");
    expect(response.status).toBe(500);
  });
});
