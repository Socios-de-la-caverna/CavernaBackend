import { Elysia, t } from "elysia";
import Usuarios from "./rutas/usuarios";

const app = new Elysia();
const usuarios = new Usuarios();

app.group("/api", (app) =>
  app
    .get("/usuarios", () => usuarios.obtenerUsuarios())
    .get("/usuarios/:id", ({ params: { id } }) => usuarios.obtenerUsuario(id))
    .post("/usuarios", ({ body }) => usuarios.crearUsuario(body))
    .put("/usuarios/:id", ({ body, params: { id } }) =>
      usuarios.actualizarUsuario(body, id),
    ),
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
