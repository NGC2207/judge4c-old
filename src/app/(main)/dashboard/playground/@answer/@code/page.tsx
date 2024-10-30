"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Editor from "@monaco-editor/react";

export default function CodePage() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-8 w-full border-b p-1">
        <div className="flex flex-row">
          <Select>
            <SelectTrigger className="h-6 w-auto border-none px-1.5 py-0.5">
              <SelectValue placeholder="C" defaultValue="c" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">C</SelectItem>
              <SelectItem value="dark">C++</SelectItem>
              <SelectItem value="system">Java</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex-grow">
        <Editor
          height="100%"
          theme="vs-light"
          language="c"
          defaultValue="printf('Hello, World!');"
          options={{ minimap: { enabled: false } }}
        />
      </div>
    </div>
  );
}
