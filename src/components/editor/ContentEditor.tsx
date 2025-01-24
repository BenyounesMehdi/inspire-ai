import { useEffect, useState } from "react";
import { ForwardRefEditor } from "./ForwardRefEditor";

type ContentEditorProps = {
  content: string;
};

export default function ContentEditor({ content }: ContentEditorProps) {
  const [editorContent, setEditorContent] = useState<string>(content);
  useEffect(() => {
    setEditorContent(content);
  }, [content]);
  return (
    <div>
      <ForwardRefEditor
        key={editorContent}
        markdown={editorContent}
        className="p-2 w-full markdown-content"
      />
    </div>
  );
}
