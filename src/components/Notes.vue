<template>
<div class="container" >
    <note class="content" v-for="(note,index) in notes" v-bind:key="index" :note="note" @updateNote="updateNote" @deleteNote="deleteNote"  ></note>
    <add-new-button  @addNote="addNote" />

</div>

</template>

<script>

import axios from "axios";
import AddNewButton from "./AddNewButton.vue";
import Note from "./Note.vue";

export default {
  name: 'Notes',
    components: {Note,AddNewButton},
  data() {
    return {
    notes: [    ],
    upnote:{},
    newnote:{
      title:"",
      description:""
    },
    }
  },
  methods: {
     
    async addNoteempty(){
       try {
        const response = await axios.post(
            "http://localhost:3000/api/notes",{"title":this.newnote.title, "description":this.newnote.description}
            );
        console.log(response);
      this.getData();
      } catch (error) {
        console.log(error);
      }
     },
    addNote(){
     
      this.addNoteempty()
    },

    deleteNote(note){
      console.log(note.id);
     this.deleteOneNote(note);
    },


   async deleteOneNote(note){
      try {
        const response = await axios.delete(
            "http://localhost:3000/api/notes/"+note.id
            );
        console.log(response);
      this.getData();
      } catch (error) {
        console.log(error);
      }
    },

    updateNote(note){
  
     this.putData(note);
     
    },  

    async putData(note){
       try {
        const response = await axios.put(
            "http://localhost:3000/api/notes/"+note.id,{"title":note.title, "description":note.description}
            );
        console.log(response);
      //this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    
    

    async getData() {
      try {
        const response = await axios.get(
            "http://localhost:3000/api/notes"        );
        this.notes = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.getData();
  },
   

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}


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
</style>
