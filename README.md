# CST8914 Lab 11: Accessible Accordion

Name: David Yin
ID: 041289921

This lab updates a starter accordion using the [W3C ARIA Authoring Practices Guide accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). Open [accordion.html](accordion.html) in a browser to run it.

## Lab questions

**What keyboard interaction was missing?** The starter’s native buttons supported `Tab`, `Shift+Tab`, `Enter`, and `Space`. It lacked direct focus navigation between headers, which means that it was difficult to tell visually where the user is when navigating the page using the keyboard. The update adds the visual highlight. It also adds `Up Arrow` and `Down Arrow` to move between headers, and `Home` and `End` to jump to the first and last headers. These are shortcuts alongside the standard accordion keys.

**What ARIA was missing?** The buttons lacked `aria-expanded` for the open or closed state and `aria-controls` for the associated panel. It means that the contents were not read properly by the screen reader when the user expands or retracts the sections on the page. Each button now sits in an `h2` and references its panel by ID. JavaScript updates `aria-expanded` and the panel’s `inert` state together, so a collapsed panel is also hidden from assistive technology (so the screenreader doesn't read it out when collapsed).

## Review and submission

1. **Original**: `Enter` and `Space` toggled the focused panel. The arrow keys did not move focus between headers.
2. **Updated**: With the keyboard alone, check visible focus with `Tab` and `Shift+Tab`, toggle panels with `Enter` and `Space`, and try the arrow keys, `Home`, and `End`. With a screen reader, check that each heading has a named button, the expanded or collapsed state is announced, and only open panel text is available.
3. **Publish and submit**: Publish the fork with GitHub Pages. Open the direct URL ending in `/accordion.html` to verify it loads. Submit that URL and the two answers above in Brightspace.
