import { toast } from "react-toastify";

export const copyToClipboard = async (text: string) => {
  if (!text) {
    toast.error("No text to copy.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  } catch (error) {
    toast.error("Failed to copy text.");
    throw error;
  }
};
