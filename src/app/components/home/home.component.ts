import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public games: Game[];
  public count: number;
  public page: number = 1
  private routeSub: Subscription;
  private gameSub: Subscription;
  // private pageSub: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit () {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', this.page ,params['game-search'] );
      } else {
        this.searchGames('metacrit', this.page)

      }
    });
    console.log(this.routeSub);
  };

  searchGames(sort: string,  page: number, search?: string,): void {
    this.gameSub = this.httpService
      .getGameList(sort, page, search,)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        this.count = gameList.count;
      });
  }

  openGameDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }


  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.page += 1;
    this.ngOnInit()
    // this.pageSub = this.httpService
    //   .getGameList(this.sort)
    //   .subscribe((gameList: APIResponse<Game>) => {
    //     this.games = gameList.results;
    //     this.count = gameList.count;
    //   });
  // }
  }
}
