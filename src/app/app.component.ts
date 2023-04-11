import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from 'src/app/services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hotelinventoryapp';

  //role = 'Admin';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    //this.router.events.subscribe((event) => {
    //  console.log(event);
    //});

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log("Navigation Started");
    });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log("Navigation Completed");
    });
    this.name.nativeElement.innerText = "Hilton Hotel";
    this.loggerService?.log("AppComponent.ngOnInit()");
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: any, private initService: InitService, private ConfigService: ConfigService, private router: Router) {
    console.log(initService.config);
  }

  //@ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  //ngAfterViewInit(): void {
  //  const componentRef = this.vcr.createComponent(RoomsComponent);
  //  componentRef.instance.numberOfRooms = 50;
  //}
}
