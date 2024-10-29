import { pause } from "@/lib/utils";

export default async function ConsolePage() {
  await pause(3000);

  // throw new Error("Failed to load Console");

  return (
    <section className="h-full w-full border rounded-lg p-4">
      <h2 className="text-xl">Console</h2>
    </section>
  );
}
