<template>
 <div class="view">


      <note :note="note"  />
      <button @click="$router.back()" class="btn btn-primary btn-sm">&lt; Back</button>
 </div>

  

</template>

<script>
//import router from "@/router";
import axios from "axios";
import Note from '../components/Note.vue';
export default {
  name: 'Noteview',
   components: {
    Note
  }, 

  data(){
    return {
  note:{},
    }
    },
    methods: {

  /* deleteNote(note){
   //  console.log("deleted", note );
      //   this.$router.push({name: 'Noteview', params: { id: this.note.id } })

     //   this.note.splice(this.notes.indexOf(note), 1);        
    },*/

    async getOneData() {
      const url="http://localhost:3000/api/notes/"+this.$route.params.id;
       console.log(url);

      try {
        const res = await axios.get(url);
      

        this.note = res.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },

   async created() {
     //           console.log(this.$route.params.id);

    this.getOneData();

   },

    }

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

</script>
<style>
.view{
  display: inline-grid;

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



</style>