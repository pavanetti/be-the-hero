const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../database/connection");

describe("ONG", () => {
  beforeEach(() => {
    connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to createa new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "BemTeVi",
      email: "bemtevi@hotmail.com",
      whatsapp: "12998324531",
      city: "São José dos Campos",
      uf: "SP",
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
