"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="h-full w-full border rounded-lg p-4 bg-red-300">
      <h2 className="text-xl text-red-800">Answer Error!</h2>
      <p>{error?.message}</p>
    </section>
  );
}
