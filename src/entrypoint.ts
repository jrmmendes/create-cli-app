import { parse } from '@/parser';
import { name, version, description } from '../package.json';

const command = parse({ 
  argv: process.argv, 
  pkg: { name, version, description } 
});

await command();
