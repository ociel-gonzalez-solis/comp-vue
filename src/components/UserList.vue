<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <h1>Hola Mundo</h1>
    </li> -->
    <slot v-for="user in users" :key="user.id" :user="user" />
  </ul>
</template>

<script>
export default {
    props: {
        users: {
            type    : Array,
            required: true
        }
    }
};
</script>

<style scoped>
ul{
    list-style: none;
}
</style>
