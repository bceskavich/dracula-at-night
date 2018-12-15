# Changelog

## 2.5.0

Updates to syntax highlighting for JSX, CSS, and TypeScript typings. See https://github.com/bceskavich/dracula-at-night/pull/3 for more detailed explanations of each.

## 2.4.0

Added further Python support:

- Function definition coloring
- Consistent function invocation coloring
- Punctuation (dot syntax, colons) coloring

## 2.3.0

Added further Elixir support.

## 2.2.1

Fixed a small bug where some string punctuation marks weren't styled the right color.

## 2.2.0

Add stylings for the new Breadcrumbs feature, released in [VS Code v1.26](https://code.visualstudio.com/updates/v1_26#_breadcrumbs)

## 2.1.0

- JavaScript and TypeScript constant definitions are now styled cyan, instead of purple. This is modeled after the way we do things in Ruby. I'm considering making this the default for all languages.
- Fix some typos in the Objective-C settings

## 2.0.0

Refactored theme config, see [dracula-at-night#2](https://github.com/bceskavich/dracula-at-night/pull/2). There are a few small user facing changes in this update. I fixed some broken editor window styles and made others more consistent while rewriting.

## 1.3.0

Updates to React and JSX stylings:

- Component tags are colored purple to help differentiate between HTML tags
- Ensure fat-arrow function definitions on component classes as an auto-binding work around are styled green as expected

Better GraphQL support:

- Please use [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode) to get the extended style scopes that power this update!

Also:

- Remove default behavior to highlight matching brackets as pink. This is often unhelpful, especially when the brackets are already colored pink (e.g. Interpolation, JSX escapes). Matching bracket colors can be set manaully in user settings.

## 1.2.0

Updates to better support Ruby:

- Colors for instance (orange) and class (cyan) variables
- Fix a bug with coloring function invocations
- Ensure function definition punctuation is not colored green
- Ensure block method params are colored orange as expected
- Separator punctuation (like dots) should be styled pink
- Style constants as cyan to help differentiate with symbols, which are purple

## 1.1.0

- Updated TypeScript type syntax stylings

## 1.0.1

- Added a theme logo

## 1.0.0

Initial release!

---

## Previous

This theme was forked from Dracula Official v2.10.0. See the Dracula Official [changelog](https://github.com/dracula/visual-studio-code/blob/master/CHANGELOG.md#2100) for changes preceding the fork.
