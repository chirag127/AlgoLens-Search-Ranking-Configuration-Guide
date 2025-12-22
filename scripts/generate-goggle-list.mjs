import fs from 'fs';
import path from 'path';

const gogglesDir = path.resolve(process.cwd(), 'goggles');
const output = path.resolve(process.cwd(), 'src/goggles.json');

const files = fs.readdirSync(gogglesDir).filter(f => f.endsWith('.goggle'));
fs.writeFileSync(output, JSON.stringify(files));
