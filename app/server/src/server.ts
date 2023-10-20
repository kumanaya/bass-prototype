import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import routes from "./routes";
import connectToDatabase from "./configs/database";
import { errorHandler } from "./middlewares/errors";

const PORT = process.env.PORT || 8080;

const swaggerDefinition = {
  info: {
    title: "REST API",
    version: "1.0.0",
  },
  host: `localhost:${PORT}`,
  basePath: "/api",
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const app = express();

connectToDatabase();

const swaggerSpec = swaggerJSDoc(options);

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json());

app.use(routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
