<script>
  export let ariaLabel = "Loading…";
  export let size = "";
  export let loaderClasses = ["loader", size ? `loader-${size}` : ""]
    .filter((c) => c)
    .join(" ");
</script>

<style>
  .loader {
    --loading-color: var(--agnostic-loading-color, var(--agnostic-dark));
    --loading-size: var(--fluid-16);
    --loading-size-small: var(--fluid-12);
    --loading-size-large: var(--fluid-18);

    position: relative;
    box-sizing: border-box;
    animation: blink 1s infinite;
    animation-delay: 250ms;

    /* Make up for negative positioning */
    margin-left: var(--loading-size);

    /* Initially set zero until aria-busy becomes true */
    opacity: 0%;
  }

  .loader,
  .loader::before,
  .loader::after {
    width: calc(var(--loading-size) / 2);
    height: calc(var(--loading-size) / 2);
    border-radius: var(--fluid-6);
    background-color: var(--loading-color);
  }

  /* SMALL */
  .loader-small,
  .loader-small::before,
  .loader-small::after {
    width: calc(var(--loading-size-small) / 2);
    height: calc(var(--loading-size-small) / 2);
  }

  /* LARGE */
  .loader-large,
  .loader-large::before,
  .loader-large::after {
    width: calc(var(--loading-size-large) / 2);
    height: calc(var(--loading-size-large) / 2);
    border-radius: var(--fluid-8);
  }

  .loader::before,
  .loader::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    animation: blink 1s infinite;
  }

  .loader::before {
    left: calc(-1 * var(--loading-size));
    animation-delay: 0s;
  }

  .loader::after {
    left: var(--loading-size);
    animation-delay: 500ms;
  }

  /* SMALL */
  .loader-small::before {
    left: calc(-1 * var(--loading-size-small));
  }

  .loader-small::after {
    left: var(--loading-size-small);
  }

  /* LARGE */
  .loader-large::before {
    left: calc(-1 * var(--loading-size-large));
    animation-delay: 0s;
  }

  .loader-large::after {
    left: var(--loading-size-large);
  }

  /**
 * Setting aria-busy to true results in corresponding opacity change to visually show spinner.
 */
  .loader[aria-busy="true"] {
    opacity: 100%;
  }

  @keyframes blink {
    50% {
      background-color: transparent;
    }
  }

  @media (prefers-reduced-motion), (update: slow) {
    .loader,
    .loader::before,
    .loader::after {
      transition-duration: 0.001ms !important;
    }
  }
</style>

<div class="{loaderClasses}" role="status" aria-live="polite" aria-busy="true">
  <span class="screenreader-only">{ariaLabel}</span>
</div>
