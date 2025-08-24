import TemplateScripts from '@/components/TemplateScripts';
import { loadTemplateFromFile } from '@/lib/template';

export default function HomeEN() {
  // Na start używamy tej samej wersji index.html; później podmienimy na EN.
  const { html, scripts } = loadTemplateFromFile('index');
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TemplateScripts scripts={scripts} />
    </div>
  );
}
