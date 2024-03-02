import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Experimento } from "app/model/experimento";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })

export class ExperimentoService {
    apiUrl: string = 'http://localhost:8080/api/experimento';
    constructor(private http: HttpClient) {}

    //listar experimentos
    getExperimentos(): Observable<Experimento[]> {
        return this.http.get<Experimento[]>(this.apiUrl);
    }
    //adicionar experimento
    addExperimento(experimento: Experimento): Observable<Experimento> {
        return this.http.post<Experimento>(this.apiUrl, experimento);
      }
    //atualizar experimento
    updateExperimento(id: number, experimento: Experimento): Observable<Experimento> {
        return this.http.put<Experimento>(this.apiUrl + '/' + id, experimento);
    }
    //deletar experimento
    deleteExperimento(id: number): Observable<Experimento> {
        return this.http.delete<Experimento>(this.apiUrl + '/' + id);
    }
    
  

}