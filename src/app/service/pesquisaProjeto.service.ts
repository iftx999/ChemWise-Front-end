
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PesquisaProjeto } from "app/model/pesquisaProjeto";

@Injectable({
    providedIn: 'root',
  })



export class PesquisaProjetoService{

    apiUrl: string = 'http://localhost:8080/api/pesquisaProjeto';
    constructor(private http: HttpClient) {}

    //listar pesquisaProjeto
    getPesquisaProjetos(): Observable<PesquisaProjeto[]> {
        return this.http.get<PesquisaProjeto[]>(this.apiUrl);
    }

    //adicionar pesquisaProjeto
    addPesquisaProjeto(pesquisaProjeto: PesquisaProjeto): Observable<PesquisaProjeto> {
        return this.http.post<PesquisaProjeto>(this.apiUrl, pesquisaProjeto);
      
    }

    //atualizar pesquisaProjeto
    updatePesquisaProjeto(id: number, pesquisaProjeto: PesquisaProjeto): Observable<PesquisaProjeto> {
        return this.http.put<PesquisaProjeto>(this.apiUrl + '/' + id, pesquisaProjeto);
    }

    //deletar pesquisaProjeto 
    deletePesquisaProjeto(id: number): Observable<PesquisaProjeto> {
        return this.http.delete<PesquisaProjeto>(this.apiUrl + '/' + id);
    }

    //pesquisar pesquisaProjeto por id
    getPesquisaProjeto(id: number): Observable<PesquisaProjeto> {
        return this.http.get<PesquisaProjeto>(this.apiUrl + '/' + id);
    }

    
    }


