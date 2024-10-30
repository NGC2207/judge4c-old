import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AnswerLayout({
  children,
  code,
}: Readonly<{ children: React.ReactNode; code: React.ReactNode }>) {
  return (
    <div className="h-full w-full border rounded-lg">
      {children}
      <Tabs>
        <TabsList>
          <TabsTrigger value="code">代码编辑器</TabsTrigger>
        </TabsList>
        <TabsContent value="code">{code}</TabsContent>
      </Tabs>
    </div>
  );
}
