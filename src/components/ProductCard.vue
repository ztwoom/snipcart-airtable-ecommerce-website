<template>
  <transition name="fade">
    <app-hover #default="{ hover }" class="relative overflow-hidden">
      <transition name="slide">
        <button
          v-show="hover"
          class="flex items-center justify-center w-10 h-10 bg-primary-dark absolute top-product-card-h left-0 rounded-tr-lg focus:outline-none z-10"
          @click="addToCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-label="Add to cart"
            class="fill-current text-white w-6 h-6"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"
            />
          </svg>
        </button>
      </transition>
      <g-link class="block" :to="path">
        <div
          class="min-h-85 bg-surface relative flex items-center justify-center hover:shadow-lg"
        >
          <img
            :src="image"
            width="220"
            :alt="
              `${productCode} ${colorCartridge} ${productName} ${stapleSize} x ${openStapleHeight}`
            "
          />

          <div
            class="absolute bottom-0 right-0 font-medium uppercase text-xl text-gray-400 mr-4 mb-4 leading-none"
          >
            {{ productCode }}
          </div>
        </div>
        <div class="text-xs text-gray-600 tracking-wide mt-4">
          {{ stock }} in stock
        </div>
        <div
          class="text-xl leading-tight mt-1 tracking-wide hover:text-primary-dark"
        >
          {{ productCode }} ({{ colorCartridge }}) {{ productName }}
          {{ stapleSize }} x
          {{ openStapleHeight }}
        </div>
      </g-link>
      <div class="flex justify-between items-center mt-4">
        <div class="text-sm text-gray-700 tracking-wider">${{ unitCost }}</div>
        <button
          class="inline-flex justify-center items-center rounded h-9 px-2 hover:bg-primary-light focus:outline-none"
          @click="$emit('product:id', id)"
        >
          <span
            class="text-sm text-primary-dark uppercase font-medium tracking-wider"
          >
            Quick view
          </span>
        </button>
      </div>
    </app-hover>
  </transition>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    productCode: {
      type: String,
      required: true
    },
    colorCartridge: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    stapleSize: {
      type: String,
      required: true
    },
    openStapleHeight: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    unitCost: {
      type: Number,
      required: true
    }
  },
  methods: {
    async addToCart() {
      try {
        await Snipcart.api.cart.items.add({
          id: this.id,
          name: `${this.productCode} (${this.colorCartridge}) ${this.productName} ${this.stapleSize} x ${this.openStapleHeight}`,
          price: this.unitCost,
          url: this.path,
          image: this.image,
          maxQuantity: this.stock,
          quantity: 1
        });
        this.$message({
          message: `Item added to cart`,
          position: "bottom-left"
        });
      } catch {
        this.$message({
          message: "An error has ocurred",
          position: "bottom-left"
        });
      }
    }
  }
};
</script>

<style>
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all 0.2s ease;
}
.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
