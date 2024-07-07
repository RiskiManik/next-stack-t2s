import { HelloWorldTypes } from "../types/HelloWorld";

export const getHelloWorld = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = (await res.json()) as HelloWorldTypes;
  return data;
};
