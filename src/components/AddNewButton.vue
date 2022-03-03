<template>
   <button @click="addNote" class="button-add">New postit</button>  

 
</template>

<script>
export default({
    name:"AddNewButton",
    methods: {
        addNote() {
            this.$emit('addNote');
        },
    }
})
</script>

<style scoped>
.button-add {
  border: none;
  background: none;
  cursor: pointer;
  position: fixed;
  font-size: 18px;
  top: 92%;
  left: 88%;
}
  
</style>