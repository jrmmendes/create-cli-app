import { Command } from "commander";

import { shellCommandHander } from '@/shell/shell.command.ts'

export const parse = ({ argv, pkg }: { argv: string[], pkg: Package }): () => Promise<void> => {
  const program = new Command();

  program
    .name('create-cli-app')
    .description(pkg.description)
    .version(pkg.version, '-v, --version', 'output the current version')
    .option('-s, --shell', 'start example shell app (powered by ink)')


  program.parse(argv);

  const options = program.opts();

  if (options.shell) {
    return () => shellCommandHander(pkg.name, pkg.version);
  }

  return () => program.help();
}
