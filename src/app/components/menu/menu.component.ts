import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService }                 from "@ngx-translate/core";
import { Subject, takeUntil }               from "rxjs";
import { LangChangeEvent }                  from "@ngx-translate/core/lib/translate.service";
import { ActivatedRoute, Router }           from "@angular/router";
import { NgbModal }                         from "@ng-bootstrap/ng-bootstrap";
import { BasicModalComponent }              from "../modals/basic-modal/basic-modal.component";
import { AppState, selectFavoritesCount }   from "../../+state/favorites/favorites.selector";
import { Store }                            from "@ngrx/store";

@Component({
    selector   : 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls  : [ './menu.component.scss' ]
})
export class MenuComponent {

    @ViewChild('content') content!: ElementRef;

    language: string;
    counter!: number;

    private destroyed$: Subject<boolean> = new Subject();

    constructor(private translate: TranslateService,
                private route: ActivatedRoute,
                private router: Router,
                private modalService: NgbModal,
                private store: Store<AppState>) {

        this.route.queryParams.pipe(
            takeUntil(this.destroyed$)
        ).subscribe(params => {
            if (params['language']) {
                this.translate.use(params['language']);
            }
        });

        this.language = this.translate.getDefaultLang();
    }

    ngOnInit() {
        this.translate.onLangChange.pipe(
            takeUntil(this.destroyed$)
        ).subscribe((changeEvent: LangChangeEvent) => this.language = changeEvent.lang);

        this.store.select(selectFavoritesCount).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(count => {
            this.counter = count;
        });
    }

    changeLanguage(language: 'nl' | 'en') {
        if (language === 'nl') {
            const modalRef                      = this.modalService.open(BasicModalComponent);
            modalRef.componentInstance.content  = 'GENERAL.INCOMPLETE_LANGUAGE_MESSAGE';
            modalRef.componentInstance.closeBtn = 'GENERAL.UNDERSTOOD';
        }

        this.translate.use(language);
        this.router.navigate([], { queryParams: { language: language } });
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
