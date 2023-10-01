import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolve(option: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [option.paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
}
