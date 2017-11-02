import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PackTypeParameterModel } from "app/shared/common/models/parameter/pack-type-parameter-model";
import { ParametersDataService } from "app/shared/common/services/parameters-data.service";
import { TranslateService } from "app/shared/common/services/localization/translate.service";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { NotificationService } from "app/shared/common/services/notification.service";
import { AuthenticationService } from "app/authentication/services/authentication.service";


@Component({
  moduleId: module.id,
  selector: 'app-packtype-save.component',
  templateUrl: './packtype-save.component.html'
})
export class PackTypeSaveDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PackTypeSaveDialog>,
    @Inject(MAT_DIALOG_DATA) public dialogModel: PackTypeParameterModel,
    private parametersDataService: ParametersDataService,
    private authenticationService: AuthenticationService,
    private translateService: TranslateService,
    private errorHandler: GlobalErrorHandler,
    private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.dialogModel = new PackTypeParameterModel();
    this.dialogModel.id = -1;
    this.dialogModel.customerId = this.authenticationService.getCurrentUser().customerId;
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  save(model: PackTypeParameterModel, isValid: boolean) {
    debugger;
    if (isValid) {
      this.parametersDataService.savePackType(this.dialogModel, this.translateService.currentLanguage).subscribe(packtypeid => {
        if (packtypeid > 0) {
          this.dialogModel.id = packtypeid;

          this.notificationService.show('Packtype created', 'success', 'center', 'top');

          this.dialogRef.close(this.dialogModel);
        }
      }, error => {
        this.errorHandler.handleError(error);
      });
    }
  }
}
