<script>
  import Card from "./Card.svelte";
</script>

<style>
  .custom-wrap {
    padding: 16px 32px;
  }
  .custom-card {
    border: 1px solid #d6d6d6;
    margin: 36px auto;
    padding: 24px;
    transition: 0.5s transform;
    transform: scale(1);
  }
  .custom-card:hover {
    transform: scale(1.1);
    box-shadow: 4px 8px 4px #cdcdcd;
  }
</style>

<Card>
  <div style="flex: 1;" class="custom-wrap">
    <h1>Default Card</h1>
  </div>
  <div style="flex: 2;" class="custom-wrap">
    <p>
      This card comes with some
      <span class="quoted">skinning css</span>
      included. Also, it's a flex container with direction of
      <i>row</i>
      , so each child with a
      <i>flex</i>
      rule with get placed as a sort of column in the row (until the viewport is
      shrunk below a certain breakpoint and then it will stack).
    </p>
  </div>
</Card>

<div class="mbe24"></div>

<Card isBorder="{true}">
  <div style="flex: 1;" class="custom-wrap">
    <h1>Border Card</h1>
  </div>
  <div style="flex: 2;" class="custom-wrap">
    <p>
      This card comes with some
      <span class="quoted">skinning css</span>
      included. Also, it's a flex container with direction of
      <i>row</i>
      , so each child with a
      <i>flex</i>
      rule with get placed as a sort of column in the row (until the viewport is
      shrunk below a certain breakpoint and then it will stack).
    </p>
  </div>
</Card>

<div class="mbe24"></div>

<Card isBorder="{true}" isRounded="{true}">
  <div style="flex: 1;" class="custom-wrap">
    <h1>Border and Rounded</h1>
  </div>
  <div style="flex: 2;" class="custom-wrap">
    <p>
      This card comes with some
      <span class="quoted">skinning css</span>
      included. Also, it's a flex container with direction of
      <i>row</i>
      , so each child with a
      <i>flex</i>
      rule with get placed as a sort of column in the row (until the viewport is
      shrunk below a certain breakpoint and then it will stack).
    </p>
  </div>
</Card>

<div class="mbe24"></div>

<Card isBorder="{true}" isStacked="{true}">
  <div style="flex: 1;" class="custom-wrap">
    <h1>Border and stacked</h1>
  </div>
  <div style="flex: 2;" class="custom-wrap">
    <p>
      This card comes with some
      <span class="quoted">skinning css</span>
      included. Also, it's a flex container with direction of
      <i>row</i>
      , so each child with a
      <i>flex</i>
      rule with get placed as a sort of column in the row (until the viewport is
      shrunk below a certain breakpoint and then it will stack).
    </p>
  </div>
</Card>

<div class="mbe24"></div>

<Card isShadow="{true}" isStacked="{true}">
  <div style="flex: 1;" class="custom-wrap">
    <h1>Shadow and stacked</h1>
  </div>
  <div style="flex: 2;" class="custom-wrap">
    <p>
      This card comes with some
      <span class="quoted">skinning css</span>
      included. Also, it's a flex container with direction of
      <i>row</i>
      , so each child with a
      <i>flex</i>
      rule with get placed as a sort of column in the row (until the viewport is
      shrunk below a certain breakpoint and then it will stack).
    </p>
  </div>
</Card>

<div class="mbe24"></div>

<Card isStacked="{true}" isShadow="{true}" isAnimated="{true}">
  <div class="custom-wrap">
    <h1 style="flex: 1; display: flex; justify-content: center;">
      Animated, Shadow, & Stacked Card
    </h1>
    <div style="flex 1;">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>column</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of row in the stack.
      </p>
    </div>
  </div>
</Card>

<div class="mbe24"></div>

<Card type="success" isStacked="{true}">
  <div class="custom-wrap">
    <h1 style="flex: 1; display: flex; justify-content: center;">Success</h1>
    <div style="flex 1;">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>column</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of row in the stack.
      </p>
    </div>
  </div>
</Card>

<div class="mbe24"></div>

<Card type="info" isStacked="{true}">
  <div class="custom-wrap">
    <h1 style="flex: 1; display: flex; justify-content: center;">Info</h1>
    <div style="flex 1;">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>column</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of row in the stack.
      </p>
    </div>
  </div>
</Card>

<div class="mbe24"></div>

<Card type="warning" isStacked="{true}">
  <div class="custom-wrap">
    <h1 style="flex: 1; display: flex; justify-content: center;">Warning</h1>
    <div style="flex 1;">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>column</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of row in the stack.
      </p>
    </div>
  </div>
</Card>

<div class="mbe24"></div>

<Card type="error" isStacked="{true}">
  <div class="custom-wrap">
    <h1 style="flex: 1; display: flex; justify-content: center;">Error</h1>
    <div style="flex 1;">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>column</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of row in the stack.
      </p>
    </div>
  </div>
</Card>

<div class="mbe24"></div>

<Card isSkinned="{false}">
  <div class="custom-card custom-wrap">
    <h1>Card With No Skinning</h1>
    <p>
      This card omits any
      <span class="quoted">skinning css</span>
      but includes the base or core CSS. So, we can style it without the need to
      resort to css custom theming at all -- we simply define our own customized
      styles. It does come with some base styles but hopefully not too
      opinionated for your use case.
    </p>
  </div>
</Card>
