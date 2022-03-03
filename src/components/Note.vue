<template>
      <div class="content" >
        <button v-if="(this.$route.name)== 'Home'" class="button-close" v-on:click="deleteNote">x</button>
        <div class="tc-note-title" contenteditable="" @blur="titleChanged"> {{note.title}}  </div>
        <div class="tc-note-body" contenteditable="" @blur="descriptionChanged"> {{note.description}} </div>
        <div class="button1">
  <button  v-on:click="updateNote" class="button2">Save</button>

        <button v-if="(this.$route.name)== 'Home'" v-on:click="goToHome" class="button2">Show</button>
        </div>

     </div>
</template>

<script>

export default {
   name:"Note",
    props: {
        note:{
            type: Object,
            required: true
        }
    },
    
  
    methods: {

          goToHome(){
    
    this.$router.push({name: 'Noteview', params: { id: this.note.id } })

    },
        updateNote(){
          this.$emit('updateNote', this.note);
        },
        deleteNote() {
        this.$emit('deleteNote', this.note);
        },
        titleChanged($event) {
        this.note.title = $event.target.innerHTML;
        },
        descriptionChanged($event) {
        this.note.description = $event.target.innerHTML;
      },
       

    }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  margin: 10px;
  padding: 20px 10px;
  background-color: #ffffa5;
  transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -webkit-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  box-shadow: 2px 4px 6px #444;
  -moz-box-shadow: 2px 4px 6px #444;
  -webkit-box-shadow: 2px 4px 6px #444;
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
.tc-note-title,
 .tc-note-body {
   outline: 0;
 }
 .tc-note-title {
   font-size: 24px;
   padding: 10px 16px;
   font-weight: bold;
 }
 .tc-note-body {
   font-size: 20px;
   padding: 10px 16px 16px;
 }
.button-close {
  position: absolute;
  top: 5px;
  left: 90%;
  border: none;
  color: black;
  background: none;
  cursor: pointer;
}
.button1{
  width: 80%;
  display: flex;
  margin-block-start: 35px;
    justify-content: space-between !important;

}
.button2{
  font-size: 15px;
    font-family: monospace;

  border: none;
  color: black;
  background: none;
  cursor: pointer;
}

</style>