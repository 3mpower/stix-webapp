export const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard: ", text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
}
