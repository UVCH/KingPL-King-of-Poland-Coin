import TemplateScripts from '@/components/TemplateScripts';
import { loadTemplateHtmlFromFile } from '@/lib/template';

export default function HomeEN() {
  // Na start używamy tej samej wersji index.html; później podmienimy na EN.
  const html = loadTemplateHtmlFromFile('index');
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TemplateScripts />
    </div>
  );
}
