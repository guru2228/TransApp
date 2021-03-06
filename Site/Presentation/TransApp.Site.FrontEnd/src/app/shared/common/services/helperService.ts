﻿import { Injectable, HostListener } from "@angular/core";
import { ComponentStateType } from "app/shared/common/helper/component-state-type";
import PerfectScrollbar from 'perfect-scrollbar';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
declare var $: any;
const moment = require("moment/moment");

@Injectable()
export class HelperService {

  private sharedData = new BehaviorSubject<any>(null);
  receiveSharedDataBetweenComponentsHandler$ = this.sharedData.asObservable();
  sendSharedDataBetweenComponents(value) {
    this.sharedData.next(value);
  }
  // don't forget to reset handler
  resetSendSharedDataHandler() {
    this.sharedData.next(null);
  }

  screenSize: number;

  /**
     * Get component state based on current url
     * @param url
     */
  getComponentStateByUrl(url: string) {
    if (url.indexOf("-add") >= 0) {
      return ComponentStateType.add;
    } else if (url.indexOf("-edit") >= 0) {
      return ComponentStateType.edit;
    } else if (url.indexOf("-edit") >= 0) {
      return ComponentStateType.display;
    }
  }

  scrollOnTop() {
    const $main_panel = $(".main-panel");
    $main_panel.scrollTop(0);
  }


  scrollOnElement(elementId) {
    const $main_panel = $(".main-panel");
    const elementPosition = $('#' + elementId).offset();
    $main_panel.scrollTop(elementPosition);
  }

  /**
   * Move focus on an element
   * @param elementId
   */
  setFocusOnElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  }

  /**
   * Returns true if mobile devices width is detected
   */
  isMobile() {
    if (this.screenSize <= 768)
      return true;
    return false;
  }

  toMomentDate(date: Date) {
    return moment(date);
  }
  /**
     * Convert datetime to string
     * @param dateobj
     * @param format available formats: en, nl, fr, de, ro
     * @param include
     * @returns {}
     */
  dateToString(dateobj: any, format: string, includeTime = false) {
    const year = dateobj.getFullYear();
    const month = ("0" + (dateobj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateobj.getDate()).slice(-2);
    const hours = ("0" + dateobj.getHours()).slice(-2);
    const minutes = ("0" + dateobj.getMinutes()).slice(-2);
    const seconds = ("0" + dateobj.getSeconds()).slice(-2);
    let convertedDate = "";

    switch (format) {
      case "nl":
        convertedDate = day + "/" + month + "/" + year;
        break;
      case "fr": // dd-mm-yyyy
        convertedDate = day + "-" + month + "-" + year;
        break;
      case "de": // yyyy-mm-dd
        convertedDate = year + "-" + month + "-" + day;
        break;
      case "ro": // yyyy-mm-dd
        convertedDate = day + "." + month + "." + year;
        break;
      default:
        convertedDate = day + month + year;
        if (includeTime) {
          convertedDate += hours + minutes + seconds;
        }
        return convertedDate;
    }

    if (includeTime) {
      convertedDate += " " + hours + ":" + minutes + ":" + seconds;
    }

    return convertedDate;
  }

  convertToDateTime(datestring: string) {
    const dt1 = parseInt(datestring.substring(0, 2));
    const mon1 = parseInt(datestring.substring(2, 4));
    const yr1 = parseInt(datestring.substring(4, 8));
    const date1 = new Date(yr1, mon1 - 1, dt1);
    return date1;
  }

  /**
     * Receive user language parameter and return datetime format
     * @param language
     * @returns {}
     */
  getLanguageSpecificFormatForDate(
    language: string,
    includeTime = false
  ) {
    let format = "";
    switch (language) {
      case "nl":
        format = "dd/MM/yyyy";
        break;
      case "fr": // dd-mm-yyyy
        format = "dd-MM-yyyy";
        break;
      case "de": // yyyy-mm-dd
        format = "yyyy-MM-dd";
        break;
      case "ro": // yyyy-mm-dd
        format = "dd.MM.yyyy";
        break;
      default:
        format = "dd/MM/yyyy";
        break;
    }
    if (includeTime) {
      format += " hh:mm:ss";
    }
    return format;
  }
}
