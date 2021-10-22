import { Injectable } from '@angular/core';
import { Costume } from '../models/CostumeModel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CostumesService {

  private costumes: Costume[];

  constructor(private http: HttpClient) {
    this.costumes = [];
  }

  //Petición HTTP para obtener todos los disfraces
  getAll(){
    this.http.get<Costume[]>("http://")
  }
}
