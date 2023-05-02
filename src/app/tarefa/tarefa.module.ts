import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { TarefaRoutingModule } from './tarefa-routing.module';
import { TarefaComponent } from './tarefa/tarefa.component';



@NgModule({
  declarations: [
    TarefaComponent
  ],
  imports: [
    CommonModule,
    TarefaRoutingModule,
    MatTableModule
  ]
})
export class TarefaModule { }
