<template>
  <div>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button @click="clickHandler">
        One
      </Button>
      <Button @click="clickHandler">
        Two
      </Button>
      <Button @click="clickHandler">
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        is-bordered
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        is-bordered
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        is-bordered
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        is-raised
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        is-raised
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        is-raised
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        mode="primary"
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        mode="primary"
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        mode="primary"
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        mode="primary"
        :is-bordered="true"
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        mode="primary"
        is-bordered
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        mode="primary"
        is-bordered
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        mode="primary"
        :is-raised="true"
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        mode="primary"
        :is-raised="true"
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        mode="primary"
        is-raised
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        mode="secondary"
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        mode="secondary"
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        mode="secondary"
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        mode="secondary"
        :is-bordered="true"
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        mode="secondary"
        is-bordered
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        mode="secondary"
        is-bordered
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Appropriate label for your button group">
      <Button
        mode="secondary"
        :is-raised="true"
        @click="clickHandler"
      >
        One
      </Button>
      <Button
        mode="secondary"
        :is-raised="true"
        @click="clickHandler"
      >
        Two
      </Button>
      <Button
        mode="secondary"
        is-raised
        @click="clickHandler"
      >
        Three
      </Button>
    </ButtonGroup>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { action } from '@storybook/addon-actions';

const actionsData = {
  clickHandler: action('click'),
};

export default {
  name: "ButtonGroupTests",
  components: { ButtonGroup, Button },
  methods: actionsData
};
</script>
