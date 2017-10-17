import { Injectable } from '@angular/core';
import { ComponentStateType } from "app/shared/common/helper/component-state-type";

declare const $: any;

@Injectable()
export class NotificationService {


  /**
   * Show notification
   * @param message  notification message
   * @param notificationType type: allowed types ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary']
   * @param horizontalPosition vertical position, allowed: 'left', 'center','right'
   * @param verticalPosition horizontal position, allowed: 'bottom', 'top'
   */
  show(message: string, notificationType: string, horizontalPosition: any, verticalPosition: any) {
    const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];

    const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: message
    }, {
        type: notificationType,
        timer: 3000,
        placement: {
          from: verticalPosition,
          align: horizontalPosition
        }
      });
  }

  /**
   * show loading
   * @param message
   * @param timer  number of seconds to load
   */
  showLoading(timer = 1, message = 'Loading') {
    if (timer <= 1) {
      const notify = $.notify(message, {
        type: 'info',
        allow_dismiss: false,
        showProgressbar: true,
        delay: 100,
        timer: timer * 1000
      });
    } else {
      const notify = $.notify(message, {
        type: 'info',
        allow_dismiss: false,
        showProgressbar: true,
      });
    }


    setTimeout(function () {
    }, timer * 1000);
  }
}
