import axios from 'axios';
let sections = axios('https://api.jaydnserrano.com/photos')
  .then(response => {
    return response;
  })
  .catch(error => {
    console.log(error)
  }
  )
export default sections;