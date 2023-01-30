import { Server, Model, Factory, hasMany, hasOne } from "miragejs";

export default function makeServer() {
  return new Server({
    models: {
      user: Model.extend({}),
    },
    factories: {
      user: Factory.extend({
        email: "usuario@exemplo.com",
        password: "senha",
      }),
    },
    seeds(server) {
      server.create("user", {
        email: "usuario@gmail.com",
        password: "password",
      });
    },
    routes() {
      this.namespace = "api";

      this.post("/login", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ email });

        if (!user) {
          return { error: "Usuário não encontrado." };
        }

        if (user.password !== password) {
          return { error: "Senha incorreta." };
        }

        return { message: "Login realizado com sucesso." };
      });
    },
  });
}
