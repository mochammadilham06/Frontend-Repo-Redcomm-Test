<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :id="id"
  >
    <path :d="path1"></path>
    <path :d="path2"></path>
  </svg>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "24",
    },
    height: {
      type: String,
      default: "24",
    },
    id: {
      type: String,
      required: true,
    },
    path1: {
      type: String,
      required: true,
    },
    path2: {
      type: String,
      required: true,
    },
  },
};
</script>
