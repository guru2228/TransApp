import { Injectable } from '@angular/core';
import { ComponentStateType } from "app/common/helper/component-state-type";

@Injectable()
export class HelperService {


    /**
     * Get component state based on current url
     * @param url 
     */
    getComponentStateByUrl(url: string) {
        if (url.indexOf('-add') >= 0) {
            return ComponentStateType.add;
        }
        else if (url.indexOf('-edit') >= 0) {
            return ComponentStateType.edit;
        }
        else if (url.indexOf('-edit') >= 0) {
            return ComponentStateType.display;
        }
    }

    /**
     * Convert datetime to string
     * @param dateobj 
     * @param format available formats: en, nl, fr, de, ro
     * @param include 
     * @returns {} 
     */
    dateToString(dateobj: any, format: string, includeTime: boolean = false) {
        var year = dateobj.getFullYear();
        var month = ("0" + (dateobj.getMonth() + 1)).slice(-2);
        var day = ("0" + dateobj.getDate()).slice(-2);
        var hours = ("0" + dateobj.getHours()).slice(-2);
        var minutes = ("0" + dateobj.getMinutes()).slice(-2);
        var seconds = ("0" + dateobj.getSeconds()).slice(-2);
        var convertedDate = "";

        switch (format) {
            case "nl":
                convertedDate = day + "/" + month + "/" + year;
                break;
            case "fr": //dd-mm-yyyy
                convertedDate = day + "-" + month + "-" + year;
                break;
            case "de": //yyyy-mm-dd
                convertedDate = year + "-" + month + "-" + day;
                break;
            case "ro": //yyyy-mm-dd
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
        var dt1 = parseInt(datestring.substring(0, 2));
        var mon1 = parseInt(datestring.substring(2, 4));
        var yr1 = parseInt(datestring.substring(4, 8));
        var date1 = new Date(yr1, mon1 - 1, dt1);
        return date1;
    }

    /**
     * Receive user language parameter and return datetime format
     * @param language 
     * @returns {} 
     */
    getLanguageSpecificFormatForDate(language: string, includeTime: boolean = false) {
        let format = '';
        switch (language) {
            case "nl":
                format = "dd/MM/yyyy";
                break;
            case "fr": //dd-mm-yyyy
                format = "dd-MM-yyyy";
                break;
            case "de": //yyyy-mm-dd
                format = "yyyy-MM-dd";
                break;
            case "ro": //yyyy-mm-dd
                format = "dd.MM.yyyy";
                break;
            default:
                format = 'dd/MM/yyyy';
                break;
        }
        if (includeTime) {
            format += " hh:mm:ss";
        }
        return format;
    }
}