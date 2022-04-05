
import './index.css'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'
import Post from './component/Post'
import Alert from './component/Alert'

// dom contant loaded
document.addEventListener('DOMContentLoaded', getall_post);

// get form data
document.getElementById('timelineForm_data').addEventListener('submit', post_form);

// Alert message
let msg = document.querySelector('.msg');





// get all post
function getall_post(){
    axios.get('http://localhost:5050/product').then(res => Post.showall_Data(res.data));
}

// get all form data option 
function post_form(e){
    e.preventDefault();

    // get form data
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

// form validation

    if(data.name == '' || data.content == '' || data.uphoto =="" || data.photo == '' ){
    msg.innerHTML = Alert.danger('All feilds are requred');
    }else{

        axios.post('http://localhost:5050/product', {
            name            : data.name,
            author_photo    : data.aphoto,
            post_content    : data.content,
            post_photo      : data.photo
        }).then(res => {

            getall_post()
            msg.innerHTML = Alert.success('Your post successfully done');
            
         })

}

}

