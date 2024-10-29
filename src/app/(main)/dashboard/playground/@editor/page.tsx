import { pause } from "@/lib/utils";

export default async function Editor() {
  await pause(3000);

  // throw new Error("Failed to load Editor");

  return (
    <section className="h-full w-full border rounded-lg p-4">
      <h2 className="text-xl">Editor</h2>
    </section>
  );
}
