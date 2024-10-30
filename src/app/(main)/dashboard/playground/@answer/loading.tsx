import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col space-y-3 h-full w-full border rounded-lg p-4">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
      <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
}
