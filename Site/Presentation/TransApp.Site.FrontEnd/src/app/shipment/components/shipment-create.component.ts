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

declare interface Table_With_Checkboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
    headerRow: string[];
    dataRows: Table_With_Checkboxes[];
  }

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
    public tableData2: TableData2;
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
             start: [6, 11,14, 18] ,
             connect: true,
             range: {
                 min: 0,
                 max: 24
             }
         });

         
         var sliderDouble = document.getElementById('sliderDoubleReceiver');
         noUiSlider.create(sliderDouble, {
            start: [6, 11,14, 18] ,
              connect: true,
              range: {
                  min: 0,
                  max: 24
              }
          });
         
          this.tableData2 = {
            headerRow: [ '#', '', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                {id: 1, ischecked: true, product_name: 'Moleskine Agenda', type: 'Office', quantity: 25, price: 49, amount: '1,225'},
                {id: 2, ischecked: true, product_name: 'Stabilo Pen', type: 'Office', quantity: 30, price: 10.99, amount: '109'},
                {id: 3, ischecked: true, product_name: 'A4 Paper Pack', type: 'Office', quantity: 50, price: 49, amount: '1,225'},
                {id: 4, ischecked: false, product_name: 'Apple iPad', type: 'Meeting', quantity: 10, price: 499.00, amount: '4,990'},
                {id: 5, ischecked: false, product_name: 'Apple iPhone', type: 'Communication', quantity: 10, price: 599.00, amount: '5,999'}
            ]
         };
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any):void{
        console.log(value);
    }
}
