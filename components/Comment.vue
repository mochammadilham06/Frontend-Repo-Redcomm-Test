<template>
  <div>
    <section
      v-for="comment in comments"
      :key="comment.id"
      class="flex bg-white border border-[#F0F0F0] rounded-xl container px-5 sm:px-0 shadow-lg mb-4 hover:cursor-pointer hover:shadow-xl transition ease-in-out delay-150"
    >
      <div class="space-y-2 md:space-y-5 px-5 py-5">
        <h2 class="text-primary-dark-light text-2xl font-bold">
          {{ comment.username }}
        </h2>
        <p>{{ comment.comment }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>
