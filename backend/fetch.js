
/*async function fetchnotes() {
    let url = 'http://localhost:3000/api/notes';
    try {
        let res = await fetch(url);
        return await res.json();
       // console.log(x);
        
    } catch (error) {
        console.log(error);
    }
}*/
/*
async function rendernotes() {

    let notes = await fetchnotes();
    let htmlnotes = '';
    notes.forEach(note => {
     

        let htmlSegment = `
                            <div class="col">

                             <div class="card text-end p-3" style="width: 22rem;">
                              <h2 class="card-title">${note.title}</h2>
                               <div class="card-text" class="summary"><p>${note.description}</p></div>
                                                       <!-- Button trigger modal -->
                                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal${note.id}"> + MORE</button>

                             </div>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="myModal${note.id}" role="dialog">
                              <div class="modal-dialog">
                              
                                <!-- Modal content-->
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title">${note.title}</h4>
                                  </div>
                                  <div class="modal-body">
                                    <p>${note.description}</p>

                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                                
                              </div>
                            </div>`;

            htmlnotes += htmlSegment;
        
    });

    let container = document.querySelector('#container');
    container.innerHTML = htmlnotes;
}*/
/*
async function fetchnote(id) {
    let urlf = 'http://localhost:3000/api/notes/'+id;
    console.log(urlf);
    try {
        let resf = await fetch(urlf);
        return await resf.json();
       // console.log(x);
        
    } catch (error) {
        console.log(error);
    }
}
async function rendernote(id) {
    let notef = await fetchnote(id);
    
    let htmlmore = `<div class="more">
                       <h2>${notef.title}</h2>
                        <div class="summary"><p>${notef.summary}</p></div>
                    </div>`;
   
        
    

    let Classnote = document.querySelector('.note');
    Classnote.innerHTML = htmlmore;
};*/
//rendernotes();

