import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // It is a property which we are passing to our HTML component
  title = 'My University Subjects';

  // Here I have initialized the property of list with an empty array
  list:any[] =[]
 


ngOnInit(){}

// functionality to add the data in local storage and 
// an object into an empty array with push() method.
// here we have a parameter which is eventually the value we are getting from the input box

  addData(item: string ){
   this.list.push({id: this.list.length, name: item})
  localStorage.setItem('name',JSON.stringify(this.list));
  }

// functionality to remove the data from the list array 
// and removing it  aslo from the local storage 


  removeData(){
  localStorage.removeItem('name')
  this.list = []
  }


   
 
}
