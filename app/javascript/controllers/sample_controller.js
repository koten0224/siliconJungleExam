import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = []
  sample(){
    Rails.ajax({
      url: ``,
      type: 'Patch', 
      dataType: 'json',
      beforeSend: (xhr, options) => {
        options.data = data
        xhr.setRequestHeader('Content-Type', 'application/json')
        return true
      },
      success: resp => {
        
      }, 
      error: err => {
        console.log(err);
      } 
      
    })
  }
  
}