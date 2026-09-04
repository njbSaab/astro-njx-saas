/**
 * One place to rebrand the whole theme.
 * Swap these values, edit the data arrays inside the section components — ship.
 */
export const SITE = {
  name: 'njX UI',
  badge: 'starter',
  title: 'njX UI Starter — Build Landing Pages Fast',
  description:
    'A showcase landing built 100% with njX UI + Alpine.js on Astro. One CSS import, nine themes, zero custom design work. Copy, rename, ship.',

  /** Header / footer / social links */
  github: 'https://github.com/njbSaab/njx-css-ui',
  npm: 'https://www.npmjs.com/package/njx-ui',
  docs: 'https://njxui.dev/documentation',
  quickstart: 'https://njxui.dev/quickstart',
  examples: 'https://njxui.dev/examples',
  classless: 'https://classless.njxui.dev',

  /** The copyable pill under the hero text */
  cdnSnippet:
    "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/njx-ui@1/css/style.min.css'>",
  cdnUrl: 'https://cdn.jsdelivr.net/npm/njx-ui@1/css/style.min.css',

  /** "Star us" modal: shows once per visitor, N seconds after load. 0 disables it. */
  starPopupDelay: 30000,
};
