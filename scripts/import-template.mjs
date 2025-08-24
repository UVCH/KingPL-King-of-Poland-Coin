import fs from 'fs-extra';
import path from 'path';

const ROOT = process.cwd();
const SRC  = path.join(ROOT, 'template');
const DST  = path.join(ROOT, 'public', 'template');

(async () => {
  if (!(await fs.pathExists(SRC))) {
    console.error(`❌ Folder ${SRC} nie istnieje. Dodaj pliki do 'template/'.`);
    process.exit(1);
  }
  await fs.remove(DST);
  await fs.copy(SRC, DST);
  console.log(`✅ Skopiowano: ${path.relative(ROOT, SRC)} → ${path.relative(ROOT, DST)}`);
})();
