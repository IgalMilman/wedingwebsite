import { ApplicationMode } from "./ApplicationMode";
import { openLinkHere, RedirectTarget } from "./LinksMethods";

export class AppStatus {
  public constructor(
    mode: ApplicationMode = ApplicationMode.Homepage,
    changeMode: (target: RedirectTarget) => void = openLinkHere
  ) {
    this.mode = mode;
    this.changeMode = changeMode;
  }

  private _mode: ApplicationMode = ApplicationMode.Homepage;
  private _changeMode: (target: RedirectTarget) => void = ()=>{};

  public get mode(): ApplicationMode {
    return this._mode;
  }
  public set mode(value: ApplicationMode) {
    if (value === undefined) {
      this._mode = ApplicationMode.Homepage;
    } else {
      this._mode = value;
    }
  }

  public get changeMode(): (target: RedirectTarget) => void {
    return this._changeMode;
  }
  public set changeMode(value: (target: RedirectTarget) => void) {
    this._changeMode = value;
  }
}
