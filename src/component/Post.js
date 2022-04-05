
class Post {



    constructor(){

        this.post_timelines = document.getElementById('timeline_post_loaded');

    }

/**
 * get all post
 */


showall_Data(Posts){

    let post = '';

    Posts.reverse().map((data) =>{

        const {name, author_photo, post_photo, post_content, } = data;

        post += `
      
        <div class="card shadow my-3">
        <div class="card-body">
            <div class="user-post-timeline d-flex justify-content-between">

                <div class="user-photo d-flex align-items-center">
                    <img class="card-img" src="${author_photo}" alt="">
                    <h5 class="ms-2">${name}</h5>
                </div>
                
               <div class="user-info">
                   <button>...</button>
               </div>
            </div>
            <div class="timeline-contant my-2">
                <p>${post_content}</p>
                 <img class="w-100" src="${post_photo}" alt="">
            </div>
        </div>
    </div>            

        `;

    })

    this.post_timelines.innerHTML = post;

}



}


let post = new Post;

export default post;