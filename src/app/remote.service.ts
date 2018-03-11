import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RemoteService {

  constructor( private http: Http, private jsonp: Jsonp ) { 
  }

  getData(){
  	return this.http.get("app/data.json").toPromise().then(function(response){
  		console.log("it was success");
  		return response.json();
  	}).catch(function(error){
  		console.log('it was an error');
  		return error;
  	})
  }

   getDataOb(){
  	return this.http.get("https://api.myjson.com/bins/1c5zlh").map(function(response){
  		return response.json()
  	}).catch(function(error){
  		console.log('it was an error');
  		return error;
  	})
  }
  // *************jsonp********
  extractData(response){
  	return response.jsonp();
  }

  handleError(error){
  	return error;
  }

  search( searchTerm ){
  	let ur1 = 'http://en.wikipedia.org/w/api.php';
  	let params = new URLSearchParams();
  	params.set('search', searchTerm);
  	params.set('action', 'opensearch');
  	params.set('format', 'json');
  	params.set('callback', 'JSONP_CALLBACK');
  	return this.jsonp.get(ur1, {search:params}).
  		map( this.extractWiki ).
  		catch( this.handleError )
  

  }
  extractWiki(response){
  	console.log(response)
  	return response.json()[1];
  }

}


















