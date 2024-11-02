import { useRef, useCallback } from "react";
import { Template } from "@/types/template";

const useEditor = (templates: Template[], selectedLanguage: string) => {
  const editorRef = useRef<any>(null);

  const handleReset = useCallback(() => {
    const selectedTemplate = templates.find(
      (template) => template.language === selectedLanguage
    );
    if (editorRef.current) {
      editorRef.current.setValue(selectedTemplate?.code || "");
    }
  }, [templates, selectedLanguage]);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  return { handleReset, handleEditorDidMount };
};

export default useEditor;
