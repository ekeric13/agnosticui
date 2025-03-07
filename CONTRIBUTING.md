# Contributing to AgnosticUI

Thanks for your interest in contributing to AgnosticUI! Please take a moment to review this document in order to make the contribution process smooth for all involved.

## Running monorepo

So you should only need to do `yarn install` from the top-level directory.

_Note: if you accidentally do a `yarn install` from one of the package directories, just do `yarn --check-files` to &ldquo;unbork&rdquo; things._

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui
yarn install
```

With above setup, you can then run any of the top-level script e.g. `yarn start:react`, `yarn start:vue`, `yarn start:angular`, `yarn start:svelte`, which will open the corresponding [Storybook](https://github.com/storybookjs/storybook) — Storybooks is basically a dev environment which allows you to conveniently view and live edit the AgnosticUI components.

## Checklist

TL;DR: If you're already very familiar with open-source contributions and just want to cut to the chase, here is a checklist to follow:

- [ ] First submitted new feature or bugfix issue? Unless it's a small bugix, we generally prefer to track PRs against an issue which starts a dialogue to give us context.
- [ ] Does the change require CSS updates to existing components? If so, have you updated all frameworks and verified?
- [ ] Does this add a new component? If so, have you updated all framework's `copystyles.js` to pull in said CSS and verified it's working properly?
- [ ] Tests passing?
- [ ] Have you added to the framework's /examples apps? e.g. `agnosticui-react/examples`? These are kitchen sink sanity checks which help to verify a component is working and derive documentation snippets.
- [ ] Have you updated the docs? These live in [site/docs](https://github.com/AgnosticUI/agnosticui/tree/master/site/docs)

_We realize above checklist is pretty intimidating, reach out with an at mention on your issue if you're interested in contributing but need some clarifications!_

The rest of this document goes into more details.

## Pull requests

**Please suggest a change before starting to code a new feature or bugfix.**

We'd really hate for you to invest a lot of time and effort into a bugfix or new feature just to
have it rejected because it's already being tackled, or the idea doesn't align with our roadmap. To avoid this, we request that contributors first create [an issue](https://github.com/agnosticui/agnosticui/issues) to first discuss the bug or feature.

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Here are some best practices before creating an issue:

0. **[Validate your HTML](https://html5.validator.nu/)** to ensure your
   problem isn't caused by a simple error in your own code.

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue hasn't already been fixed** &mdash; try to reproduce it using the
   latest `master` in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example. For more dynamic
   examples use [codesandbox](https://codesandbox.io/), [codepen](https://codepen.io/), or any
   tool that suffienntly loads the dependencies required to reproduce said use case.

Please try to be as detailed as possible in your report. What is
your environment, OS, browser, etc.? List the exact steps to reproduce the issue. Then,
list the expected results vs. actual results. These seemingly mundane details will really
help contributors and/or reviewers understand and tackle the problem efficiently.

Example template:

> Short descriptive bug report and title
>
> A summary of issue, browser/OS environment; and steps to reproduce:
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>    Expected outcome.
>    Actual outcome.
>
> `<url>` - a link to the reduced test case

## Feature requests

Feature requests are certainly welcome. But, first please take a moment to determine
whether your idea fits with the scope of AgnosticUI. Keep in mind that we''d like to
keep the surface API from growing too large (we may eventually open an _Addons_ side
project for more complex components. But, our goal is to cover core primitive components
that can be used as building blocks for your own custom design systems.

Of course if you're willing to contribute with pull requests and/or proof-of-concept code
sandboxes or pens, all the better. As is with many open source projects, this is a labor of
love done on the maintainer's spare time; so, unfortnately, we can't tackle everything that
comes our way.

## Pull requests

We deeply appreciate bug reports or feature suggestions that come with an
investment from the reporter. Especially a GitHub pull request!

However, again **please do ask first** before embarking on any **significant** coding
effort so we can confirm the idea. For something more trivial that doesn't require too
much of your time, you can go ahead and make a PR preemptively.

## Forking model

We use the following fork-pull-request model:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Use GitHub interface to fork the repo into your own forked repo
   # Then, clone your fork of the repo onto your local machine
   git clone https://github.com/<your-username>/agnosticui.git
   # Navigate to the newly cloned directory
   cd agnosticui
   # Now add "upstream" for our upstream repo to a remote called "upstream"
   git remote add upstream https://github.com/agnosticui/agnosticui.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull --rebase upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/about-git-rebase/)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/about-pull-requests/)
   with a clear title and description against the `master` branch.

_For visual changes, it never hurts to leave some screen grabs on the pull request._

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [Apache License Version 2.0, License](./LICENSE).

## Code guidelines

Take some time to become familiar with the common AgnosticUI APIs. You'll see some common
themes like `isDisabled` props, `disabledOptions` for tabs or choice inputs (or "groups of things"), `isSkinned` which serves as a way for folks to opt-out of visual styles on the component's container. Checks for `a11y` violations and implementing _keyboard navigation_ when applicable is
always appreciated! Ensuring you have a storybook story and anything else that makes your component solid and consistent with existing APIs is welcomed.

Please also run `lint`, `test`, etc., and ensure changes don't break the codebase.

## How it all works

If you've gotten this far, you must really be serious about contributing—thank you! Let's dive
into the big picture philosophy of AgnosticUI so you can be successful contributing.

### Frameworks

The philosophy of AgnosticUI is to curate a top-level _component.html_ and _component.css_ in the agnostic-css `yarn workspace`. Then, we synchronize that css down into the various framework implementations. This is done via a simple Node script which literally copies the CSS over into each framework. We call this script `copystyles.js`, and it lives at the top-level of each framework package.

So, if you've created a new component in agnostic-css (assuming you plan to add a framework implementation as well e.g. React, Angular, Vue, or Svelte), you would then need to find the corresponding `copystyles.js` node script and copy `component.css` into the appropriate place.

_Note: it's certainly not expected that you create anything more then the agnostic-css component! Further, if you feel most comfortable in say React, you can always contribute a
React component, and eventually someone else will eventually port your CSS and/or React
component implementation into the other framework implementations._

The copy styles script is easier to understand if you just have a look at the existing examples. In general, React uses an external `component.module.css` which wraps a CSS file directly copied over. Angular simply copies the file and uses imports. Svelte and Vue use SFC, so there's a small regex replacement that happens to copy the styles in between the respective `<style></style>` tags.

Since each framework implementation is a `yarn workspace` package, it is setup with as its own independent workspace and a `package.json`. So simply install the dependencies and then fire-up [Storybook](https://storybook.js.org/) to get started.

_if the notion of workspaces or monorepos is new for you, have a look at the [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) page._

### Viewing each workspace

Let's have a look at how to fire up each of the workspaces. All the following commands can be
ran from the top-level agnosticui directory:

#### HTML/CSS

To see the HTML/CSS versions of the components simply do the following from top root directory:

```shell
yarn start:css
```

#### Svelte

To see the Svelte storybook simply do the following from top root directory:

```shell
yarn start:svelte
```

#### Vue

To see the Vue storybook imply do the following from top root directory:

```shell
yarn start:vue
```

#### React

To see the React storybook imply do the following from top root directory:

```shell
yarn start:react
```

## How it works

AgnosticUI takes an HTML/CSS first approach to UI component primitives, but attempts to also deliver framework specific implementations of these primitives. Every time you run `yarn storybook` in a framework-specific subdirectory it first runs `copystyles.js` to synchronize the top-level CSS! The structure simplified looks like this:

```shell
├── agnostic-css
│   ├── LICENSE
│   ├── button.css
│   ├── button.html
│   └── package.json
├── agnostic-react
│   ├── copystyles.js
│   ├── package.json
│   ├── src
│   │   ├── stories
│   │   │   ├── Button.js
│   │   │   ├── Button.stories.js
│   │   │   ├── button.css
│   │   │   └── button.module.css
│   │   └── storybook.test.js
├── agnostic-svelte
│   ├── copystyles.js
│   ├── package.json
│   ├── src
│   │   └── stories
│   │       ├── Button.stories.js
│   │       ├── Button.svelte
│   │       └── Button.test.js
├── agnostic-vue
│   ├── copystyles.js
│   ├── package.json
│   ├── src
│   │   └── stories
│   │       ├── Button.stories.js
│   │       ├── Button.test.js
│   │       └── Button.vue
...and so on
```

So, the styles for each framework are driven from the CSS package's component CSS files, where we've tried to ensure that the core component works well standalone. For example, if you run `yarn storybook` from within the React package, we will first run a script
that copies the CSS package's component CSS files over into the corresponding React framework ones.

Let's take the button component that lives in the CSS package at: `agnostic-css/button.css`. Anytime we run `yarn storybook` within the React package, the `button.css` file is literally copied over into React's: `agnostic-react/src/stories/button.css`. This &ldquo;syncing of styles&rdquo; ensures that we don't inadvertently diverge from the CSS package.

Similarly, for Vue's Button component, that same top-level `button.css` file is copied over into `agnostic-vue/src/stories/Button.vue`, but, this time within it's `<style module>...</style>` tags.

The main idea here, is that all framework styles are synchronized with the top-level CSS package's styles before you're even allowed to fire up Storybook to view the rendered components. Essentially, this ensures synchronization of component primitive styles across framework implementations.


## License

By contributing your code, you agree to allow the project owners to
license your work under the terms of the [Apache License Version 2.0, License](./LICENSE).
