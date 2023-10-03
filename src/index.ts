import { Elysia } from "elysia";

const app = new Elysia();

app.group("/api", (app) =>
  app
    .get("/usuarios", () => "Usuarios")
    .get("/usuarios/:id", ({ params: { id } }) => `Usuario ${id}`)
    .post("/usuarios", () => "Usuario creado")
    .put("/usuarios/:id", ({ params: { id } }) => `Usuario ${id} actualizado`),
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
