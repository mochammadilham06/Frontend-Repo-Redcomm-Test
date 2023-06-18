<template>
  <div>
    <!-- Search Input -->
    <div class="flex justify-end py-3 px-5">
      <div class="flex flex-wrap w-full md:w-1/4">
        <div class="flex -mr-px">
          <span
            class="flex items-center leading-normal bg-grey-lighter rounded-2xl rounded-r-none border border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >
            <SearchIcon
              width="24"
              height="24"
              id="search"
              path1="M11 22C4.935 22 0 17.065 0 11S4.935 0 11 0s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9z"
              path2="M23 24a.997.997 0 0 1-.707-.293l-4.795-4.795a1 1 0 0 1 1.415-1.414l4.794 4.795A.999.999 0 0 1 23 24z"
            />
          </span>
        </div>
        <input
          class="flex-shrink flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded-2xl rounded-l-none px-3 relative"
          v-model="search"
          @input="handleSearchInput"
          placeholder="Search..."
        />
      </div>
    </div>
    <!-- End Search Input -->

    <!-- Comment Content -->
    <comment :comments="comments" />
    <!-- End Comment Content -->

    <!-- Spinner When Loading -->
    <div v-if="isLoading" class="overlay">
      <div class="spinner"></div>
    </div>
    <!-- End Of Spinner -->

    <!-- Button load More -->
    <div class="flex justify-center">
      <button v-if="hasMoreComments" @click="loadMoreComments" class="btn">
        Load More
      </button>

      <!-- End Button Load More -->
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment.vue";
import axios from "axios";

export default {
  //Components
  components: {
    Comment,
  },
  //Initial State
  data() {
    return {
      comments: [],
      search: "",
      per_page: 10,
      totalComments: 0,
      isLoading: false,
      isError: false,
      searchTimer: null,
    };
  },
  //Check if comments length for button load more
  computed: {
    hasMoreComments() {
      return this.comments.length < this.totalComments;
    },
  },

  methods: {
    //Method For Fetching API
    async fetchComments() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(
          `${this.$config.public.API_BASE}/comments`,
          {
            params: {
              per_page: this.per_page,
              search: this.search,
            },
          }
        );
        this.comments = data.data.comments;
        this.totalComments = data.data.total;
      } catch (error) {
        console.error(error);
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
    //Load More
    async loadMoreComments() {
      this.per_page += 10;
      await this.fetchComments();
    },

    //Handle Search With Custom Hooks use Debounce
    handleSearchInput() {
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.fetchComments();
      }, 1000);
    },
  },

  // Mounted Fethcing data
  mounted() {
    this.fetchComments();
  },
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
