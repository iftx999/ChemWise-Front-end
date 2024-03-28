import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regante } from 'app/model/reagente';
@Injectable({
    providedIn: 'root',
  })



export class ReganteService{

    apiUrl: string = 'http://localhost:8080/api/Regante';
    constructor(private http: HttpClient) {}

    //listar Regante
    getRegantes(): Observable<Regante[]> {
        return this.http.get<Regante[]>(this.apiUrl);
    }

    //adicionar Regante
    addRegante(Regante: Regante): Observable<Regante> {
        return this.http.post<Regante>(this.apiUrl, Regante);
      
    }

    //atualizar Regante
    updateRegante(id: number, Regante: Regante): Observable<Regante> {
        return this.http.put<Regante>(this.apiUrl + '/' + id, Regante);
    }

    //deletar Regante 
    deleteRegante(id: number): Observable<Regante> {
        return this.http.delete<Regante>(this.apiUrl + '/' + id);
    }

    //pesquisar Regante por id
    getRegante(id: number): Observable<Regante> {
        return this.http.get<Regante>(this.apiUrl + '/' + id);
    }

}