import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "WPICTF2020";

  message: string = "";

  constructor(httpClient: HttpClient) {
    httpClient
      .get("https://wpictf2020.firebaseio.com/message.json")
      .subscribe((res: string) => {
        this.message = res;
      });
  }
}
