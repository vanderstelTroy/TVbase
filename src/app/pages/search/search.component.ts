import { Component }  from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ShowResult } from "../../models/ShowResult";

@Component({
    selector   : 'app-search',
    templateUrl: './search.component.html',
    styleUrls  : [ './search.component.scss' ]
})
export class SearchComponent {

    results: ShowResult[] = [];

    constructor(private apiService: ApiService) {
    }

    search(query: string) {
        this.apiService.search(query).then(res => this.results = res);
    }
}
