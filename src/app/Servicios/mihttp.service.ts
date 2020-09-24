import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Observable  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MihttpService {

  constructor( public http: HttpClient ) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }


  public obtenerPaises(url) {
    return this.http.get(url);
  }

  private extractData ( res: HttpResponse<any> )
  {
    return res.body() || {};
  }

  private handleError ( error: HttpResponse<any> | any )
  {
    return error;
  }

}
