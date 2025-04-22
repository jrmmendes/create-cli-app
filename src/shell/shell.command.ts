import { runInkApplication } from '@/shell';

export const shellCommandHander = (name: string, version: string) => {
  return runInkApplication({ name, version });
}
