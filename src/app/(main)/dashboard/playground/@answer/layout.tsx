import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeXml } from "lucide-react";

export default function AnswerLayout({
  children,
  code,
}: Readonly<{ children: React.ReactNode; code: React.ReactNode }>) {
  return (
    <div className="h-full w-full border rounded-lg">
      {children}
      <Tabs defaultValue="code">
        <TabsList className="flex flex-row items-center justify-start rounded-t-lg rounded-b-none">
          <TabsTrigger value="code" className="rounded-lg">
            <div className="flex flex-row items-center justify-start">
              <CodeXml className="h-6 w-auto text-cyan-500" />
              <span className="ml-2">代码</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="code">{code}</TabsContent>
      </Tabs>
    </div>
  );
}
