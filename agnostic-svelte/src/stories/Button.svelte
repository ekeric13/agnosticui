<script>
  export let mode = "";
  export let size = "";
  export let isBordered = false;
  export let isBlock = false;
  export let isLink = false;
  export let isBlank = false;
  export let isDisabled = undefined;
  export let role = undefined;
  export let isRaised = false;
  export let isCircle = false;
  export let isRounded = false;
  export let isSkinned = true;
  // The following properties can be used by consumers of Tabs which setup their own
  // custom buttons as these aria and tabindex attributes are required for a11y
  export let ariaSelected = undefined;
  export let ariaControls = undefined;
  export let tabIndex = undefined;

  /**
   * This prop is an escape hatch for global CSS overrides. Likely, the most useful reason to
   * leverage this is to add custom responsive media query code. Note that you'll likely need
   * to add specificity to beat out the Svelte based CSS, and, in Svelte land you'll need to
   * utilize globals functionality which might look like:
   * @media all and (min-width: 769px) {
   *   :global(button.btn.button-overrides) {
   *     font-size: 18px;
   *     ...etc.
   */
  export let css = "";

  /**
   * Button type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   * submit: submits form data to the server
   * reset: resets all the controls to their initial values, like <input type="reset">
   * button: button has no default behavior, and does nothing when pressed by default.
   */
  export let type = "button";

  // ******************** HEY! ************************
  // You will need to also add these to the buttonslot:
  // agnostic-svelte/src/stories/ButtonSlot.svelte
  let klasses = [
    isSkinned ? "btn" : "btn-base",
    mode ? `btn-${mode}` : "",
    size ? `btn-${size}` : "",
    isBordered ? "btn-bordered" : "",
    isBlock ? "btn-block" : "",
    isCircle ? "btn-circle" : "",
    isRounded ? "btn-rounded" : "",
    isDisabled ? "disabled" : "",
    isRaised ? "btn-raised" : "",
    isBlank ? "btn-blank" : "",
    isLink ? "btn-link" : "",
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
  /*
* Base Button Style
*
* Please note that we have two versions of this:
* `.btn` which encompasses both the base and skin styles
* `.btn-base` and `btn-skin`.
* The reason we've done this is to provide you with some convenience but
* also flexibility. Most will just want to apply `.btn`. However, if the
* base skin of the button does not work for you, another option is to only
* apply `.btn-base` and then set your own "button skin".
*/
  .btn-base,
  .btn {
    /* TODO test this fallback override syntax is correct */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    appearance: none;
    cursor: pointer;
    box-sizing: border-box;
    transition-property: all;
    transition-duration: var(--agnostic-timing-medium);
  }

  .btn-skin,
  .btn {
    color: var(--agnostic-btn-font-color, var(--agnostic-dark));
    background-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));
    border-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));

    /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
    border-style: solid;
    border-width: var(--agnostic-btn-border-size, 1px);
    font-family: var(
      --agnostic-btn-font-family,
      var(--agnostic-font-family-body)
    );
    font-weight: var(--agnostic-btn-font-weight, 400);
    font-size: var(--agnostic-btn-font-size, 1rem);

    /* this can be overriden, but it might mess with the balance of the button heights across variants */
    line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
    padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
    padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
    padding-inline-start: var(--agnostic-side-padding, 0.75rem);
    padding-inline-end: var(--agnostic-side-padding, 0.75rem);
    text-decoration: none;
    text-align: center;
    outline: none;
  }

  .btn:visited {
    color: var(--agnostic-btn-font-color, var(--agnostic-dark));
  }

  .btn:hover {
    opacity: 85%;
    text-decoration: none;
  }

  .btn:active {
    text-shadow: 0 1px 0 rgb(255 255 255 / 30%);
    text-decoration: none;
    transition-duration: 0s;
    box-shadow: inset 0 1px 3px rgb(0 0 0 / 20%);
  }

  .btn:focus {
    box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-color);

    /* Needed for High Contrast mode */
    outline: var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-outline-style)
      var(--agnostic-focus-ring-outline-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }

  /*
* Disabled State
*
* The disabled state uses the class .disabled, is-disabled,
* and the form attribute disabled="disabled".
* The use of !important is only added because this is a state
* that must be applied to all buttons when in a disabled state.
*/
  .btn.disabled,
  .btn:disabled {
    top: 0 !important;
    background: var(
      --agnostic-btn-disabled-bg,
      var(--agnostic-gray-mid-dark)
    ) !important;
    text-shadow: 0 1px 1px rgb(255 255 255 / 100%) !important;

    /* primary, secondary, natural, all look same when disabled; and we don't want to
  have an inadvertant looking blue primary border when disabled so it's transparent */
    border-color: transparent;
    color: var(
      --agnostic-btn-disabled-color,
      var(--agnostic-gray-dark)
    ) !important;
    cursor: default !important;
    appearance: none !important;
    box-shadow: none !important;
    opacity: 80% !important;
  }

  .btn-primary {
    background-color: var(--agnostic-btn-primary, var(--agnostic-primary));
    border-color: var(--agnostic-btn-primary, var(--agnostic-primary));
    color: var(--agnostic-btn-primary-color, var(--agnostic-light));
  }

  /* Border and font is primary. When hovered, we invert with primary background and white font */
  .btn-primary.btn-bordered {
    color: var(--agnostic-btn-primary, var(--agnostic-primary));
  }

  .btn-primary.btn-bordered:hover,
  .btn-primary.btn-bordered:focus {
    background-color: var(--agnostic-btn-primary, var(--agnostic-primary));
    color: var(--agnostic-btn-primary-color, var(--agnostic-light));
  }

  .btn-primary:visited {
    color: var(--agnostic-btn-primary-color, var(--agnostic-light));
  }

  .btn-secondary {
    background-color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
    border-color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
    color: var(--agnostic-btn-secondary-color, var(--agnostic-light));
  }

  /* Border and font is secondary. When hovered, we invert with secondary background and white font */
  .btn-secondary.btn-bordered {
    color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
  }

  .btn-secondary.btn-bordered:hover,
  .btn-secondary.btn-bordered:focus {
    background-color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
    color: var(--agnostic-btn-secondary-color, var(--agnostic-light));
  }

  .btn-secondary:visited {
    color: var(--agnostic-btn-secondary-color, var(--agnostic-light));
  }

  /*
* Raised Buttons
*
* A classic looking button that offers
* great depth and affordance.
*/
  .btn-raised {
    border-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));
    border-style: solid;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f6f6f6),
      to(#e1e1e1)
    );

    /* Note that while one can customize some of these slightly, we essentially have hard-coded
  box shadow rgba values so they can't really do so drastically which is probably fine :) */
    background: linear-gradient(
      var(--agnostic-btn-raised-from, var(--agnostic-gray-mid)),
      var(--agnostic-btn-raised-to, var(--agnostic-gray-extra-light))
    );
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 30%), 0 1px 2px rgb(0 0 0 / 15%);
  }

  .btn-raised:hover,
  .btn-raised:focus {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(white),
      to(gainsboro)
    );
    background: linear-gradient(to bottom, white, gainsboro);
  }

  .btn-raised.active {
    /* TODO -- maybe this shouldn't be hard coded */
    background: #eee;
    box-shadow: inset 0 1px 3px rgb(0 0 0 / 20%), 0 1px 0 white;
  }

  /*
* Raised Primary Buttons
*/
  .btn-raised.btn-primary {
    border-color: var(
      --agnostic-btn-primary-raised-to,
      var(--agnostic-primary-from)
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(
        var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from))
      ),
      to(var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to)))
    );
    background: linear-gradient(
      var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from)),
      var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to))
    );
  }

  .btn-raised.btn-primary:hover,
  .btn-raised.btn-primary:focus {
    background: linear-gradient(
      to bottom,
      var(
        --agnostic-btn-primary-raised-hover-from,
        var(--agnostic-primary-hover)
      ),
      var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from))
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(
        var(
          --agnostic-btn-primary-raised-hover-from,
          var(--agnostic-primary-hover)
        )
      ),
      to(var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)))
    );
    background: linear-gradient(
      var(
        --agnostic-btn-primary-raised-hover-from,
        var(--agnostic-primary-hover)
      ),
      var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from))
    );
  }

  .btn-raised.btn-primary:active,
  .btn-raised.btn-primary.active {
    opacity: 90%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 30%);
  }

  /*
* Raised Secondary Buttons
*/
  .btn-raised.btn-secondary {
    border-color: var(
      --agnostic-btn-secondary-raised-to,
      var(--agnostic-secondary-to)
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(
        var(
          --agnostic-btn-secondary-raised-from,
          var(--agnostic-secondary-from)
        )
      ),
      to(var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))
    );
    background: linear-gradient(
      var(--agnostic-btn-secondary-raised-from, var(--agnostic-secondary-from)),
      var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to))
    );
  }

  .btn-raised.btn-secondary:hover,
  .btn-raised.btn-secondary:focus {
    background: linear-gradient(
      to bottom,
      var(
        --agnostic-btn-secondary-raised-hover-from,
        var(--agnostic-secondary-hover)
      ),
      var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to))
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(
        var(
          --agnostic-btn-secondary-raised-hover-from,
          var(--agnostic-secondary-hover)
        )
      ),
      to(var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))
    );
    background: linear-gradient(
      var(
        --agnostic-btn-secondary-raised-hover-from,
        var(--agnostic-secondary-hover)
      ),
      var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to))
    );
  }

  .btn-raised.btn-secondary:active,
  .btn-raised.btn-secondary.active {
    opacity: 90%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 30%);
  }

  /**
  * Border Buttons
  */
  .btn-bordered {
    border-width: 1px;
    background: transparent;
  }

  /**
  * Sizes
  */
  .btn-large {
    font-size: calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);
    height: 3rem;
    line-height: 3rem;
    padding: 0 3rem;
  }

  .btn-small {
    font-size: calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);
    height: 2rem;
    line-height: 2rem;
    padding: 0 2rem;
  }

  /**
  * Rounded
  */
  .btn-rounded {
    border-radius: var(--agnostic-btn-radius, var(--agnostic-radius, 0.25rem));
  }

  .btn-pill {
    border-radius: 200px;
  }

  /*
  * Size Adjustment for equal height & width buttons
  *
  * Remove padding
  */
  .btn-circle {
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0 !important;
  }

  .btn-circle-large {
    font-size: calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);
    width: 3rem;
    height: 3rem;
  }

  .btn-circle-small {
    font-size: calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);
    width: 2rem;
    height: 2rem;
  }

  /**
 * Button Block (stacked)
 */
  .btn-block {
    width: 100%;
  }

  /* This is a utility class used if you literally want to stack block buttons one after another.
Apply this class to the nth-of-type(2) onwards to ensure the borders line up properly. */
  .btn-block-following {
    margin-block-start: -1px;
  }

  /**
 * Invisible buttons. Generally used for a Cancel or icon button that behaves like a button,
 * semantically and for a11y, but, does so without all the typical "button chrome" behind it.
 */
  .btn-link,
  .btn-blank {
    font-family: var(
      --agnostic-btn-font-family,
      var(--agnostic-font-family-body)
    );
    font-size: var(--agnostic-btn-font-size, 1rem);
    background-color: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    transition: none;
  }

  /* A button blank with link color text */
  .btn-link {
    color: var(--agnostic-btn-primary, var(--agnostic-primary));
  }

  .btn-link:hover {
    cursor: pointer;
  }

  @media (prefers-reduced-motion), (update: slow) {
    .btn,
    .btn-blank,
    .btn:focus {
      transition-duration: 0.001ms !important;
    }
  }
</style>

<!-- https://github.com/sveltejs/svelte/issues/2324 -->
{#if type === 'faux'}
  <div class="{klasses}">
    <slot />
  </div>
{:else}
  <button
    type="{type}"
    class="{klasses}"
    on:keydown
    on:click
    on:focus
    on:blur
    role="{role}"
    aria-selected="{ariaSelected}"
    aria-controls="{ariaControls}"
    tab-index="{tabIndex !== undefined ? tabIndex : null}"
    disabled="{isDisabled}"
  >
    <slot />
  </button>
{/if}
