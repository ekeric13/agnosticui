# Disclose

The `Disclose` component is often used as a supplemental button to Disclose things.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DiscloseExamples />

<script>
import DiscloseExamples from '../../components/DiscloseExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, DiscloseExamples }
}
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Disclose } from "agnostic-react";
export const YourComponent = () => (
  <section>
    <Disclose
      is-open
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player. 
    </Disclose>
    <Disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    </Disclose>
    <Disclose title="Stefi Graf">
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    </Disclose>
    <Disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    </Disclose>
  </section>
  <section class="mbe48">
    <Disclose
      isBackground
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Serena Williams"
    >
      Serena Jameka Williams is an American professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Stefi Graf"
    >
      Stefanie Maria Graf is a German former professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Andre Agassi"
    >
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    </Disclose>
  </section>
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Disclose.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Disclose.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Disclose } from "agnostic-vue";

export default {
  name: "DiscloseExamples",
  components: {
    Disclose,
  },
};
</script>
<template>
  <section>
    <h3>Disclose default</h3>
    <Disclose
      is-open
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player. 
    </Disclose>
    <Disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    </Disclose>
    <Disclose title="Stefi Graf">
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    </Disclose>
    <Disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    </Disclose>
  </section>
  <section class="mbe48">
    <h3>Disclose with background</h3>
    <p class="mbs16 mbe24">The earlier example favors using
      a &ldquo;clean&rdquo; if minimalist style. However, there
      may be use cases that that require a stronger visual affordance
      for the disclose elements themeselves. If that's the case, you
      can utilize the <code>isBackground</code> prop which achieves
      the following:
    </p>
    <Disclose
      isBackground
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Serena Williams"
    >
      Serena Jameka Williams is an American professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Stefi Graf"
    >
      Stefanie Maria Graf is a German former professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Andre Agassi"
    >
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    </Disclose>
  </section>
</template>
```


Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Disclose.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Disclose.stories.js)

<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular
  </h3>
</div>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic/dist/common.min.css"],`

<div class="mbe24"></div>

Add AgnosticUI's `AgModule` module:

```js{3,9}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgModule } from 'agnostic-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now you can use in your components:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'your-component',
  template: `
  <div class="mbe48">
    <h3>Multiple Disclose</h3>
    <p class="mbs16 mbe24">Multiple disclose elements can be stacked to achieve a
      progressively disclosed pattern that resembles an Accordion pattern. Further,
      individual disclosed elements may be open by default if we supply the
      <code>isOpen</code> prop as we do in the first disclose element below:
    </p>
    <ag-disclose isOpen
                  title="Roger Federer">
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of
      Tennis
      Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and
      Novak
      Djokovic (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the
      most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis
      Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    </ag-disclose>
    <ag-disclose title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377
      weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968
      and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to
      win
      four Australian Open singles titles in the Open Era (Wikipedia).
    </ag-disclose>
  </div>
`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import 'agnostic-svelte/dist/common.min.css';
  import { Disclose } from "agnostic-svelte";
</script>
<section class="mbs16 mbe24">
  <h2>Disclose default</h2> 
  <Disclose
    is-open
    title="Roger Federer"
  >
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men&apos;s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  </Disclose>
  <Disclose title="Serena Williams">
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women&apos;s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  </Disclose>
  <Disclose title="Stefi Graf">
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  </Disclose>
  <Disclose title="Andre Agassi">
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  </Disclose>
</section>
<section class="mbs24">
  <h2 class="mbe24">Disclose with background</h2> 
  <Disclose isBackground title="Roger Federer">
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men&apos;s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  </Disclose>
  <Disclose isBackground title="Serena Williams">
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women&apos;s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  </Disclose>
  <Disclose isBackground title="Stefi Graf">
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  </Disclose>
  <Disclose isBackground title="Andre Agassi">
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  </Disclose>
</section>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Disclose.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Disclose.stories.js)

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui && yarn
# You can then run any of the top-level scripts:
yarn start:react # or
yarn start:vue # or
yarn start:angular # or
yarn start:svelte
```

See [Running monorepo](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo).
