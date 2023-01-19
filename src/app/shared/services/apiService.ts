import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonList } from '../models';

@Injectable()

export class APIService {
    baseurl: string = 'https://pokeapi.co/api/v2/';

    constructor(private _http: HttpClient) { }

    //Example of HTTP request options
    // options:
    //     {
    //         headers?: [HttpHeaders],
    //         observe?: 'body' | 'events' | 'response',
    //         params?: [HttpParams],
    //         reportProgress?: boolean,
    //         responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    //         withCredentials?: boolean,
    //     }

    //Example Get Call
    getPokemonList(limit: number, offset: number): Observable<any>{
        var pageURL: string = `pokemon?limit=${limit}&offset=${offset}`;

        return this._http.get<IPokemonList>(`${this.baseurl}${pageURL}`);
    }
}