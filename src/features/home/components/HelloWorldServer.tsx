import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getHelloWorld } from "../services/helloWorld.service";

const HelloWorldServer = async () => {
  const data = await getHelloWorld();
  return (
    <Card className="max-w-72">
      <CardHeader>
        <CardTitle>Server Component</CardTitle>
        <CardDescription>
          This Component use server side data fetcting with <i>async await</i>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data?.message}</p>
      </CardContent>
      <CardFooter>
        <p>Card Content</p>
      </CardFooter>
    </Card>
  );
};

export default HelloWorldServer;
