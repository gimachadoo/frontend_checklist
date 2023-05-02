import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API = 'http://localhost:8080/producao/checklist';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(),
      tap(tarefa => console.log(tarefa)
    )
    );
  }
}
