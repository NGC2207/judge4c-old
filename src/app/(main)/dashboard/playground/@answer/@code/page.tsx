"use client";

import Editor from "@monaco-editor/react";

export default function CodePage() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-8 w-full border-b p-1">Tab</div>
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
