import axios from 'axios';
export default class Sections {
  constructor() {
    this.sections = [];
    this.section_data = [];
    this.getSections();
  }
  getSections() {
    axios('https://api.jaydnserrano.com/sections')
      .then(res => {
        if(res.data.success){
          this.sections = res.data.sections;
          this.section_data = res.data.count;
        }
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
    }
}