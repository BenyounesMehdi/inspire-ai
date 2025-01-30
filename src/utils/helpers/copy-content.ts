export const copyContent = async (content: string) => {
  const plainText = content
    .replace(/!\[.*?\]\(.*?\)/g, "") // Remove images
    .replace(/\[([^\]]+)\]\((.*?)\)/g, "$1") // Remove links but keep the text
    .replace(/`([^`]+)`/g, "$1") // Remove inline code
    .replace(/#+\s(.+)/g, "$1") // Remove headers
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold formatting
    .replace(/\*(.*?)\*/g, "$1") // Remove italic formatting
    .replace(/~~(.*?)~~/g, "$1") // Remove strikethrough
    .replace(/>\s?(.*)/g, "$1") // Remove blockquotes
    .replace(/-\s(.*)/g, "$1") // Remove list dashes
    .replace(/\*\s(.*)/g, "$1") // Remove list asterisks
    .replace(/\d+\.\s(.*)/g, "$1") // Remove ordered list numbers
    .replace(/\n{2,}/g, "\n") // Reduce multiple newlines to a single newline
    .trim();

  return navigator.clipboard.writeText(plainText);
};
