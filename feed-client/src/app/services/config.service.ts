import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private config = {
    gameServerUrl: "http://localhost:3000/upload/"
  };

  getConfig(): any {
    return Object.freeze(this.config);
  }

  get(key: string): string {
    return this.config[key];
  }
}
