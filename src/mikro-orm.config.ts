import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "fullstack",
  type: "postgresql",
  user: "tilakpur",
  password: "password1234",
  debug: !__prod__,
  allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0];