"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetHelloWorld from "../hooks/useGetHelloWorld";

const HelloWorldClient = () => {
  const { data, isLoading } = useGetHelloWorld();
  return (
    <Card className="max-w-72">
      <CardHeader>
        <CardTitle>Client Component</CardTitle>
        <CardDescription>
          this component use react query for fetching data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{isLoading ? " loading..." : data?.message}</p>
      </CardContent>
      <CardFooter>
        <p>Card Content</p>
      </CardFooter>
    </Card>
  );
};

export default HelloWorldClient;
