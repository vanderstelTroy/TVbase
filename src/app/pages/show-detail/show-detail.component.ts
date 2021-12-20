import { Component, OnInit } from '@angular/core';
import { ApiService }        from "../../services/api.service";
import { ActivatedRoute }    from "@angular/router";
import { ShowDetails }       from "../../models/ShowDetails";
import { ShowResult }        from "../../models/ShowResult";

@Component({
    selector   : 'app-show-detail',
    templateUrl: './show-detail.component.html',
    styleUrls  : [ './show-detail.component.scss' ]
})
export class ShowDetailComponent implements OnInit {

    favorite = false;
    details!: ShowDetails;
    result!: ShowResult;

    constructor(private apiService: ApiService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.apiService.getShow(this.route.snapshot.params['id']).then(res => {
            this.details = res;
            this.result  = {
                score: res.rating.average,
                show : {
                    id   : res.id,
                    name : res.name,
                    image: res.image
                }
            }
        });
    }

}
