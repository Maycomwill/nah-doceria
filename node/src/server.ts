import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return { hello: "world" };
});

app.listen(
  { port: process.env.PORT ? Number(process.env.PORT) : 4000, host: "0.0.0.0" },
  (err, address) => {
    console.log("Server listening on " + address);
  }
);
