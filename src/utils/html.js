// Comment content from the HN API is a small subset of HTML
// (<p>, <a href>, <i>, entities). Convert it to plain text so the
// same code path renders on web and native.
export const htmlToText = (html = '') => {
  if (!html) return '';
  let text = String(html);
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/p>\s*<p>/gi, '\n\n');
  text = text.replace(/<[^>]+>/g, '');
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&nbsp;/g, ' ');
  return text.trim();
};
