<template>
  <div>
    详情
  </div>
</template>

<script>
export default {
  mounted() {
    
    this.$store.dispatch("DETAILS", this.$route.query.goodsId);
  },
  computed: {
    details: function() {
      return this.$store.state.Del.details;
    },
  },
};
</script>

<style></style>
