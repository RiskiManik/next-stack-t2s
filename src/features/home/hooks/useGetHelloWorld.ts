import { useQuery } from "@tanstack/react-query";
import { getHelloWorld } from "../services/helloWorld.service";

const useGetHelloWorld = () => {
  return useQuery({
    queryKey: ["hello world"],
    queryFn: async () => await getHelloWorld(),
  });
};

export default useGetHelloWorld;
