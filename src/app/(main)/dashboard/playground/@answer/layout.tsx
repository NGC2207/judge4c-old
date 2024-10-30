import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeXml } from "lucide-react";

export default function AnswerLayout({
  children,
  code,
}: Readonly<{ children: React.ReactNode; code: React.ReactNode }>) {
  return (
    <div className="h-full w-full flex flex-col border rounded-lg">
      {children}
      <div className="flex-grow">
        <Tabs defaultValue="code" className="h-full w-full flex flex-col">
          <TabsList className="flex flex-row items-center justify-start rounded-b-none h-9">
            <TabsTrigger value="code" className="rounded-full h-7 px-2 py-1">
              <div className="flex flex-row items-center justify-start">
                <CodeXml className="h-6 w-auto text-cyan-500" />
                <span className="ml-2">代码</span>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="flex-grow mt-0">
            {code}
          </TabsContent>
        </Tabs>
      </div>
      <div className="h-9 w-full flex items-center px-3 py-2 border-t">
        <div className="flex flex-1 items-center justify-between">
          <span className="text-sm">已存储</span>
          <span className="text-sm">行30,列10</span>
        </div>
      </div>
    </div>
  );
}
