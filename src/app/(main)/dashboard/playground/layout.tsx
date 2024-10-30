import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function PlaygroundLayout({
  children,
  problem,
  answer,
  console,
}: Readonly<{
  children: React.ReactNode;
  problem: React.ReactNode;
  answer: React.ReactNode;
  console: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 rounded-b-xl">
      {children}
      <ResizablePanelGroup direction="horizontal" className="gap-0.5 p-2 pt-0">
        <ResizablePanel defaultSize={25} className="hidden lg:block rounded-lg">
          {problem}
        </ResizablePanel>
        <ResizableHandle className="hidden lg:block bg-transparent hover:bg-cyan-500" />
        <ResizablePanel defaultSize={50} className="rounded-lg">
          {answer}
        </ResizablePanel>
        <ResizableHandle className="hidden xl:block bg-transparent hover:bg-cyan-500" />
        <ResizablePanel defaultSize={25} className="hidden xl:block rounded-lg">
          {console}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
