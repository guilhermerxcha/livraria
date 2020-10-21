import { Component, Input, OnInit } from '@angular/core';
import { Livro } from 'src/app/livro.model';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  @Input() livros: Livro[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
