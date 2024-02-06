// equipamento.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from 'app/model/equipamento';

@Injectable({
  providedIn: 'root',
})
export class EquipamentoService {
  apiUrl: string = 'http://localhost:8080/api/equipamentos';
  constructor(private http: HttpClient) {}

  getEquipamentos(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.apiUrl);
  }
}
