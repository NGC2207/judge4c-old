import { pause } from "@/lib/utils";

export default async function DefaultAnswer() {
  await pause(1000);

  return (
    <section className="h-full w-full border rounded-lg p-4 bg-purple-700">
      <h2 className="text-xl">Default Answer</h2>
    </section>
  );
}
