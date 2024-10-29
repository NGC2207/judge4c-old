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
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 rounded-b-xl">
      {children}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={20}
          className="hidden lg:block bg-red-500 rounded-xl"
        >
          A
        </ResizablePanel>
        <ResizableHandle className="hidden lg:block bg-transparent hover:bg-cyan-500" />
        <ResizablePanel defaultSize={60} className="bg-yellow-500 rounded-xl">
          B
        </ResizablePanel>
        <ResizableHandle className="hidden xl:block bg-transparent hover:bg-cyan-500" />
        <ResizablePanel
          defaultSize={20}
          className="hidden xl:block bg-green-500 rounded-xl"
        >
          C
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
