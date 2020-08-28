<template>
  <section class="container mt-24 md:mt-32 lg:mt-12">
    <!-- <g-link
      to="/products"
      class="uppercase text-sm tracking-wide font-medium text-gray-600 inline-flex items-center hover:text-primary-dark"
    >
      See all catalog
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-6 h-6 fill-current self-baseline"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M10 17l5-5-5-5v10z" />
      </svg>
    </g-link>
    <div class="border-b-2 border-black pb-2">
      <h2 class="uppercase text-lg tracking-wider font-medium mt-3">Most Popular</h2>
    </div>-->
    <div class="grid justify-center mt-6">
      <product-card
        v-for="{ node } in $static.allProduct.edges"
        :key="node.id"
        :id="node.id"
        :path="node.path"
        :image="node.images[0].url"
        :product-code="node.productCode"
        :color-cartridge="node.colorCartridge"
        :product-name="node.productName"
        :staple-size="node.stapleSize"
        :open-staple-height="node.openStapleHeight"
        :stock="node.stock"
        :unit-cost="node.unitCost"
        @product:id="quickView"
      />
    </div>
    <app-modal #default="{ close }" ref="modal">
      <product-quick-view-card :product="product" :close-modal="close" />
    </app-modal>
  </section>
</template>

<static-query>
query allProduct {
  allProduct(limit: 6, sort: { by: "number", order: ASC }) {
    edges {
      node {
        id
        productName
        productCode
        images {
          url
        }
        stock
        stapleSize
        openStapleHeight
        unitCost
        colorCartridge
        expires
        tissueThickness
        path
      }
    }
  }
}
</static-query>

<script>
import ProductCard from "./ProductCard";
import ProductQuickViewCard from "./ProductQuickViewCard";

export default {
  name: "PopularProducts",
  data() {
    return {
      product: {},
    };
  },
  components: {
    ProductCard,
    ProductQuickViewCard,
  },
  methods: {
    quickView(id) {
      this.product = this.$static.allProduct.edges.find(
        (product) => product.node.id === id
      ).node;
      this.$refs.modal.open();
    },
  },
};
</script>