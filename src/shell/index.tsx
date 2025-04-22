import { exit } from 'process';
import { render } from 'ink';

import { Application } from '@/shell/application';

export const runInkApplication = async (args: { name: string, version: string }) => {
  try {
    const { waitUntilExit } = render(
      <Application 
        name={args.name}
        version={args.version}
      />
    )
    await waitUntilExit();
  } catch(error) {
    console.error({ status: 'app exited with error', error });
    exit(1);
  }
}
