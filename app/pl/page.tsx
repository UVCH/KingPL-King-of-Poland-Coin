import TemplateScripts from '@/components/TemplateScripts';
import { loadTemplateFromFile } from '@/lib/template';

export default function HomePL() {
  const { html, scripts } = loadTemplateFromFile('index'); // template/file/index.html
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TemplateScripts scripts={scripts} />
    </div>
  );
}
