import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpService } from "app/shared/common/services/httpService";
import { Constants } from "app/shared/common/constants";
import { TranslationResource } from "app/shared/common/services/localization/translationResource";

const moment = require('moment/moment');

@Injectable()
export class TranslateService {
  public currentLanguage: string;
  public modulePrefix: string;

  /**
   * store translations for an module
   */
  moduleTranslations: any = [];

  /**
   * Store translation at application level
   */
  applicationTranslations: TranslationResource[];

  /**
   * Store translation for login page
   */
  anonymousTranslations: TranslationResource[];

  private errorMessage = '';
  private localizationServiceUrl = Constants.serverUrl + 'api/Localization/';

  constructor(private http: HttpService) {
    this.setLanguage();
  }

  public setLanguage(): void {
    // set current language
    const lang = navigator.language;
    if (lang) {
      this.currentLanguage = lang;
      //// set locale for moment js
      moment.locale(lang);
    } else {
      this.currentLanguage = 'en-EN';
      //// set locale for moment js
      moment.locale(lang);
    }

    console.log("The language is: " + lang);
  }

  formatToShortLocaleDate(datetime: Date) {
    return moment(datetime).format('L');
  }

  generateFromNowOnString(date: Date): string {
    if (date)
      return moment(date).fromNow();
    else
      return '';
  }

  public setModulePrefix(modulePrefix: string): void {
    this.modulePrefix = modulePrefix;
  }


  /**
   * getModuleTranslation.
   * @param keyName
   * @returns {}
   */
  getModuleTranslation(keyName: string, params: Array<string> = null): string {
    if (this.moduleTranslations) {
      for (let i = 0; i < this.moduleTranslations.length; i++) {
        const found = this.moduleTranslations[i].translations.filter(item => item.keyString === keyName);
        if (found && found.length > 0) {
          let keyValue = found[0].value;
          // replace params with proper values
          if (keyValue && params && params.length > 0) {
            for (let k = 0; k < params.length; k++) {
              keyValue = keyValue.replace('{' + k + '}', params[k]);
            }
          }
          return keyValue;
        }
      }
    }
    return "key not found";
  }

  /**
   * getApplicationTranslation
   * @param keyName
   * @returns {}
   */
  getApplicationTranslation(keyName: string, params: Array<string> = null): string {

    if (this.applicationTranslations) {
      const found = this.applicationTranslations.filter(item => item.keyString === keyName);
      if (found && found.length > 0) {
        let keyValue = found[0].value;
        // replace params with proper values
        if (keyValue && params && params.length > 0) {
          for (let k = 0; k < params.length; k++) {
            keyValue = keyValue.replace('{' + k + '}', params[k]);
          }
        }
        return keyValue;
      }
    }
    return "key not found";
  }

  /**
   * getLoginTranslation
   * @param keyName
   * @returns {}
   */
  getAnonymousTranslation(keyName: string): string {
    if (this.anonymousTranslations) {
      const found = this.anonymousTranslations.filter(item => item.keyString === keyName);
      if (found && found.length > 0) {
        return found[0].value;
      }
    }
    return "key not found";
  }

  /**
   * get translation resources for a module, translations, can be re-used in all other submodules.
   * If if modules translations are already loaded
   * @param modulePrefix
   * @param language
   * @returns {}
   */
  getModuleTranslations(language: string, modulePrefix: string): Observable<any> {
    const getModuleTranslationsUrl = this.localizationServiceUrl +
      'getModuleTranslations/' +
      language +
      "/" +
      modulePrefix +
      "/";
    return this.http.get(getModuleTranslationsUrl)
      .map((res: Response) => res.json());
    // .catch(this.errorHandler.throwError);
  }

  /**
   * Get application translations. Generic translations used in all modules
   * @param language
   * @returns {}
   */
  getApplicationTranslations(language: string): Observable<any> {
    const getGenericTranslationsUrl = this.localizationServiceUrl +
      'getApplicationTranslations/' +
      language +
      "/";
    return this.http.get(getGenericTranslationsUrl)
      .map((res: Response) => res.json());
    //  .catch(this.errorHandler.throwError);
  }

  /**
      * Get application translations. Generic translations used in all modules
      * @param language
      * @returns {}
      */
  getAnonymousTranslations(language: string): Observable<any> {
    const getAnonymousTranslationsUrl = this.localizationServiceUrl +
      'getAnonymousTranslations/' +
      language +
      "/";
    return this.http.get(getAnonymousTranslationsUrl)
      .map((res: Response) => res.json());
    // .catch(this.errorHandler.throwError);
  }
}
