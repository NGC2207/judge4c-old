import { useEffect, useState } from "react";
import { Template } from "@/types/template";

const useTemplates = (problemId: string, selectedLanguage: string) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [editorDefaultValue, setEditorDefaultValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch(`/api/problem/${problemId}/templates`);
        if (!response.ok) {
          throw new Error("Failed to fetch templates");
        }
        const data = await response.json();
        setTemplates(data);
        const defaultTemplate = data.find(
          (template: Template) => template.language === selectedLanguage
        );
        setEditorDefaultValue(defaultTemplate?.code || "");
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchTemplates();
  }, [problemId, selectedLanguage]);

  return { templates, editorDefaultValue, error };
};

export default useTemplates;
