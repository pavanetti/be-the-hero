const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await createOng("BemTeVi");
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should be able to authenticate", async () => {
    const name = "BemTeVi";
    const id = (await createOng(name)).body.id;
    const response = await request(app).post("/sessions").send({ id });
    expect(response.body).toHaveProperty("name");
    expect(response.body.name).toBe(name);
  });
});

function createOng(name) {
  return request(app).post("/ongs").send({
    name,
    email: "bemtevi@hotmail.com",
    whatsapp: "12998324531",
    city: "São José dos Campos",
    uf: "SP",
  });
}
