import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Search } from 'src/app/core/models/search/search';


@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  @Output() public filters = new EventEmitter<Search>();
  @Output() public tryLuck = new EventEmitter<boolean>();

  characterId: string;
  characterName: string;
  characterStatus: string;
  characterGender: string;

  constructor() { 
    this.characterId = ''
    this.characterName = '';
  }

  ngOnInit() {
  }

  // Funciones del componentes

 

}
