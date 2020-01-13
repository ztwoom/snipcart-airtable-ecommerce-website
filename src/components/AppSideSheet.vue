<template>
  <div>
    <transition name="filter-slide">
      <aside
        class="fixed top-0 right-0 bottom-0 z-40 w-75 bg-white shadow-2xl ml-auto overflow-y-scroll pb-4"
        v-show="isOpen"
      >
        <slot :toggle-sheet="toggleSheet" />
      </aside>
    </transition>
    <transition name="fade">
      <div
        v-show="isOpen"
        class="fixed z-30 top-0 right-0 left-0 bottom-0 bg-transparent-black"
        @click="toggleSheet"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppSideSheet",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleSheet() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
.filter-slide-enter-active,
.filter-slide-leave-active {
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.filter-slide-enter,
.filter-slide-leave-to {
  transform: translateX(100%);
}
.label:not([aria-selected="true"]):hover {
}
</style>
