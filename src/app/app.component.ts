import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Category",
      url: "/category",
      icon: "mail",
    },
    {
      title: "Person",
      url: "/person",
      icon: "mail",
    },
  ];

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  ngOnInit() {
  }
}
