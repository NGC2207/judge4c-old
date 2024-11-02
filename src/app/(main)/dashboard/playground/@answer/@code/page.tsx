"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Play, RefreshCw, Save, Settings } from "lucide-react";
import TooltipButton from "@/components/tooltip-button";
import LanguageSelector from "@/components/language-selector";
import useTemplates from "@/hooks/use-templates";
import useEditor from "@/hooks/use-editor";
import { Template } from "@/types/template";

const PROBLEM_ID = "98e9161d-6bd1-4364-87d0-7d027af3fa36";

export default function CodePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("c");
  const { templates, editorDefaultValue, error } = useTemplates(
    PROBLEM_ID,
    selectedLanguage
  );
  const { handleReset, handleEditorDidMount } = useEditor(
    templates,
    selectedLanguage
  );

  const [editorValue, setEditorValue] = useState<string>("");

  useEffect(() => {
    setEditorValue(editorDefaultValue);
  }, [editorDefaultValue]);

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language);
  }, []);

  const languageOptions = useMemo(() => {
    return templates.map((template: Template) => ({
      value: template.language,
      label: template.language,
    }));
  }, [templates]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("templates", templates);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-8 w-full border-b p-1 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <LanguageSelector
            value={selectedLanguage}
            onChange={handleLanguageChange}
            options={languageOptions}
          />
        </div>
        <div className="flex flex-row items-center gap-2 mr-4">
          <TooltipButton
            icon={
              <RefreshCw
                className="h-4 w-auto cursor-pointer"
                onClick={handleReset}
              />
            }
            tooltipText="重置"
          />
          <TooltipButton
            icon={<Settings className="h-4 w-auto cursor-pointer" />}
            tooltipText="设置"
          />
          <TooltipButton
            icon={<Play className="h-4 w-auto cursor-pointer" />}
            tooltipText="运行"
          />
          <TooltipButton
            icon={<Save className="h-4 w-auto cursor-pointer" />}
            tooltipText="保存"
          />
        </div>
      </div>
      <div className="flex-grow">
        <Editor
          height="100%"
          theme="vs-light"
          language={selectedLanguage}
          value={editorValue}
          onMount={handleEditorDidMount}
          options={{ minimap: { enabled: false } }}
        />
      </div>
    </div>
  );
}
