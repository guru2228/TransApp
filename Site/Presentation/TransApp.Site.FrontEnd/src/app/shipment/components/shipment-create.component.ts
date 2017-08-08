import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


declare interface User {
    text?: string; // required, must be 5-8 characters
    email?: string; // required, must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
}

declare var require: any

declare var $:any;

@Component({
    moduleId: module.id,
  selector: 'shipment-create-component',
  templateUrl: './shipment-create.component.html'
})

export class ShipmentCreateComponent{
    // rangeValidation : FormGroup;
    //
    // // We are passing an instance of the FormBuilder to our constructor
    // constructor(fb: FormBuilder){
    //   // Here we are using the FormBuilder to build out our form.
    //   this.rangeValidation = fb.group({
    //     // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //     // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //   'firstName' : [null, Validators.required],
    //   // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    //   'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    //   'gender' : [null, Validators.required],
    //
    //   })
    // }
    public user: User;
    public typeValidation: User;

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.typeValidation = {
        text: '',
        email: '',
        idSource: '',
        idDestination: '',
        url: ''
    }

            // $.getScript('../../../assets/js/plugins/bootstrap-datetimepicker.js');
        // $.getScript('../../../assets/js/plugins/jquery.tagsinput.js');

          //  Init Bootstrap Select Picker
        if($(".selectpicker").length != 0){
            $(".selectpicker").selectpicker();
        }
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });
        var noUiSlider = require('nouislider');

        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
             start: [20, 60] ,
             connect: true,
             range: {
                 min: 0,
                 max: 100
             }
         });
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any):void{
        console.log(value);
    }
}
