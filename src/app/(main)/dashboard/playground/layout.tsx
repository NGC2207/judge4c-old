import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function PlaygroundLayout({
  children,
  problem,
  editor,
  console,
}: Readonly<{
  children: React.ReactNode;
  problem: React.ReactNode;
  editor: React.ReactNode;
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
          {editor}
        </ResizablePanel>
        <ResizableHandle className="hidden xl:block bg-transparent hover:bg-cyan-500" />
        <ResizablePanel defaultSize={25} className="hidden xl:block rounded-lg">
          {console}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
