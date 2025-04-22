import { render } from 'ink-testing-library';
import { it, expect } from 'bun:test';
import { Banner } from '../src/shell/components/banner';

it('should generate a valid banner', () => {
  const { lastFrame } = render(
    <Banner name='test' cwd='/test' version="0.1.0"/>
  )

  expect(lastFrame()).toMatchInlineSnapshot(`
    "╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
    │ React + Ink Example Application                                                                  │
    │                                                                                                  │
    │ cwd: /test                                                                                       │
    │ test                                                                                             │
    │ version: 0.1.0                                                                                   │
    ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯"
  `);
})
