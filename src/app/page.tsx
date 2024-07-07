import HelloWorldClient from "@/features/home/components/HelloWorldClient";
import HelloWorldServer from "@/features/home/components/HelloWorldServer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen grid place-content-center">
      <div className="flex gap-4">
        <HelloWorldClient />
        <HelloWorldServer />
      </div>
    </main>
  );
}
