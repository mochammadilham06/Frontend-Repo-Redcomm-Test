<template lang="ts">
    <div>
 <button @click="handleClick">{{ buttonText }}</button>        
    < /div>
    
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Submit",
    },
  },
};
</script>
