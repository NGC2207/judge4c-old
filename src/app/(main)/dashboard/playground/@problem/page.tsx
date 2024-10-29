import { pause } from "@/lib/utils";

export default async function Problem() {
  await pause(3000);

  // throw new Error("Failed to load Problem");

  return (
    <section className="h-full w-full border rounded-lg p-4">
      <h2 className="text-xl">Problem</h2>
    </section>
  );
}
