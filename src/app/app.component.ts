import { Component, Inject } from '@angular/core';
import { RemoteService} from './remote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[RemoteService]
})
export class AppComponent {
  title = 'app works!';

  constructor(public remoteService : RemoteService){

  }


  fetchDataPromise= function(){
  	console.log("button is clicked, now i am calling service function getdata");
  	this.remoteService.getData().then( (response) => console.log(response) );
  }

  fetchDataOb = function(){
  	  this.remoteService.getDataOb().subscribe( (response) => console.log(response) );

  }

// ***************jsonp***************
	items;

	searchWiki( searchItem ){
		this.remoteService.search( searchItem ).subscribe(
			response=>this.items = response, 
			error=> console.log(error)
			);
	}

























}
