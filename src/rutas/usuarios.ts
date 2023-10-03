import { PrismaClient } from "@prisma/client";
import type { Usuario } from "../tipos.ts";

const prisma = new PrismaClient();

export default class Usuarios {
  async obtenerUsuarios() {
    const usuarios = await prisma.usuarios.findMany({ take: 10 });
    return usuarios;
  }

  async obtenerUsuario(id: string) {
    const usuario = await prisma.usuarios.findFirst({
      where: { discord_id: id },
    });
    return usuario;
  }

  async crearUsuario(body: Usuario) {
    if (this.obtenerUsuario(body.discord_id))
      throw new Error("El usuario ya existe");
    const usuario = await prisma.usuarios.create({ data: body });
    return usuario;
  }

  async actualizarUsuario(body: Usuario, id: string) {
    const usuarioID = await this.obtenerUsuario(id);
    const usuario = await prisma.usuarios.update({
      where: { id: usuarioID.id },
      data: { ...body, importancia: usuarioID.importancia + 1 },
    });
    return usuario;
  }
}
