<template>
  <div class="about">
    <h1>{{ projectName }}</h1>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  isRouter: true,
  data() {
    return {
      projectName: 'electron-vue-template',
      name: '禄丰医院'
    }
  }
}
</script>
