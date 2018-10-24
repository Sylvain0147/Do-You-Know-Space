import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NasaTitleService {

 private service: Http;

  constructor(p_service: Http) { 
    this.service = p_service;
  }


  
}
