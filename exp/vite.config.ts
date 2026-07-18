import { defineConfig, loadEnv } from "vite";

export default (mode: string ) => {
  const env = loadEnv(mode, process.cwd());

  console.log("VITE_V1:", env.VITE_V1);
  console.log("VITE_V2:", env.VITE_V2);

  return defineConfig({
    // your existing Vite config goes here
  });
};