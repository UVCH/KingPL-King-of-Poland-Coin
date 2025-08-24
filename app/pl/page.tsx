import TemplateScripts from '@/components/TemplateScripts';
import { loadTemplateHtmlFromFile } from '@/lib/template';

export default function HomePL() {
  const html = loadTemplateHtmlFromFile('index'); // template/file/index.html
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TemplateScripts />
    </div>
  );
}
