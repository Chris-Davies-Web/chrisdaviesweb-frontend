<template>
  <div class="social">
    <div class="twitter">
      <a href="https://twitter.com/chrisdaviesweb1">
        <vue-fontawesome
          icon="twitter"
          size="2"
          color="black"
        ></vue-fontawesome>
      </a>
    </div>
    <div class="linkedin">
      <a href="https://uk.linkedin.com/in/chris-davies-14379924">
        <vue-fontawesome
          icon="linkedin"
          size="2"
          color="black"
        ></vue-fontawesome>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
};
</script>

<style scoped>
.social {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.social div {
  margin: 20px;
}
</style>
