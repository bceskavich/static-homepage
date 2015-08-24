import marked from 'marked';

export function parseInlineLink(str) {
  return marked(str).split(/<\/?p>/)[1];
}
