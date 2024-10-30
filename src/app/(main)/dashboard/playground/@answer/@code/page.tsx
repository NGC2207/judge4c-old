"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Editor from "@monaco-editor/react";
import { Play, RefreshCw, Save, Settings } from "lucide-react";

export default function CodePage() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-8 w-full border-b p-1 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <Select>
            <SelectTrigger className="h-6 w-auto border-none px-1.5 py-0.5">
              <SelectValue placeholder="C" defaultValue="c" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="c">C</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="java">Java</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center gap-2 mr-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <RefreshCw className="h-4 w-auto cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={9}>
                <p>重置</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Settings className="h-4 w-auto cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={9}>
                <p>设置</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Play className="h-4 w-auto cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={9}>
                <p>运行</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Save className="h-4 w-auto cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={9}>
                <p>保存</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
