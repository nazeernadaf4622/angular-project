import { Injectable } from "@angular/core";
import { Settings } from "./app.settings.model";

@Injectable()
export class AppSettings {
  public settings = new Settings(
    "limeneal", //theme name
    "http://103.160.153.38:8010/"
    // 'http://127.0.0.1:8020/'
  );
}
