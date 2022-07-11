<template>
  <ul>
    <li class="filter" v-for="item in data" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProjectFilters",

  props: ["data"],
};
</script>

<style scoped></style>
