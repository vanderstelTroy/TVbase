import { Injectable }    from '@angular/core';
import { HttpClient }    from "@angular/common/http";
import { environment }   from "../../environments/environment";
import { ShowResult }    from "../models/ShowResult";
import { lastValueFrom } from "rxjs";
import { ShowDetails }   from "../models/ShowDetails";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    search(query: string) {
        return lastValueFrom(this.http.get<ShowResult[]>(`${ environment.api }/search/shows?q=${ query }`));
    }

    getShow(id: number) {
        return lastValueFrom(this.http.get<ShowDetails>(`${ environment.api }/shows/${ id }`));
    }
}
