import { Component } from '@angular/core';
import { APIService } from '../shared/services/apiService';
import { IPokemon } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pokemons: IPokemon[];

  constructor(private _apiService: APIService) {
    this.pokemons = [];
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    //Example Calls to the api service
    this._apiService.getPokemonList(151, 0).subscribe({
      next: (v) => this.pokemons = v.results,
      error: (e) => console.log(e),
      complete: () => console.log('Complete')
    });

    //Example 2
    // this._apiService.getInfo().subscribe((data) => {
    //   this.pokemons = data.results;
    // });
  }
}
