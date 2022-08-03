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
      projectName: 'electron-vite-template',
      name: '项目二'
    }
  }
}
</script>
