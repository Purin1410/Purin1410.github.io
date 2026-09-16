export async function copyCitation(text, clipboard) {
  try {
    if (!clipboard?.writeText || !text) return false;
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
