import { ForwardRefEditor } from "./ForwardRefEditor";

type ContentEditorProps = {
  content: string;
};

export default function ContentEditor({ content }: ContentEditorProps) {
  return (
    <div>
      <ForwardRefEditor
        markdown={content}
        className="p-2 w-full markdown-content"
      />
    </div>
  );
}
