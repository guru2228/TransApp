import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterModule, Router, Routes } from '@angular/router';
import { AddressAvailabilityModel } from "app/shared/common/models/address-availability-model";

declare var $: any;
var moment = require('moment/moment');

@Component(({
    selector: 'address-availability-slider',
    templateUrl: './address-availability-slider.component.html'
}) as any)
export class AddressAvailabilitySliderComponent implements OnInit, AfterViewInit {


    @Input('availability')
    availability: AddressAvailabilityModel;


    private range_min_timestamp: number;
    private range_max_timestamp: number;

    private amStart_initial_timestamp: number;
    private amStop_initial_timestamp: number;
    private pmStart_initial_timestamp: number;
    private pmStop_initial_timestamp: number;


    ngOnInit(): void {
        this.initInitialDates();
    }

    ngAfterViewInit(): void {
        var noUiSlider = require('nouislider');
        if(!this.availability.isClosed){
        this.initSlider(noUiSlider);
        }
    }

    /**
     * Based on day number get closest date with this day
     * based on this date init initial hours for intervals and for amstart and pmstart
     */
    private initInitialDates() {
        // get closest date by current day
        let date = new Date();
        if (this.availability.day > 0) {
            date = moment().isoWeekday(this.availability.day).toDate();
        }

        if (this.availability.isClosed) {
            this.availability.amStart = '';
            this.availability.amStop = '';
            this.availability.pmStart = '';
            this.availability.pmStop = '';
        }
else{
        this.range_min_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();
        this.range_max_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24, 0, 0, 0).getTime();

        this.amStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0).getTime();
        this.amStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0).getTime();
        this.pmStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 0, 0, 0).getTime();
        this.pmStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0, 0).getTime();

        if (this.availability.amStart && this.availability.amStart.length > 0) {
            let hoursArray = this.availability.amStart.split(":");
            this.amStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
        }
        else {
            this.availability.amStart = this.toFormat(this.amStart_initial_timestamp)
        }

        if (this.availability.amStop && this.availability.amStop.length > 0) {
            let hoursArray = this.availability.amStop.split(":");
            this.amStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
        }
        else {
            this.availability.amStop = this.toFormat(this.amStop_initial_timestamp)
        }

        if (this.availability.pmStart && this.availability.pmStart.length > 0) {
            let hoursArray = this.availability.pmStart.split(":");
            this.pmStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
        }
        else {
            this.availability.pmStart = this.toFormat(this.pmStart_initial_timestamp)
        }

        if (this.availability.pmStop && this.availability.pmStop.length > 0) {
            let hoursArray = this.availability.pmStop.split(":");
            this.pmStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
        }
        else {
            this.availability.pmStop = this.toFormat(this.pmStop_initial_timestamp)
        }
    }
    }

    onClosedDayClick(){
        this.availability.isClosed = !this.availability.isClosed;
        this.initInitialDates();

        if(!this.availability.isClosed){
            let self = this;
            setTimeout(function() {
                var noUiSlider = require('nouislider');
                
                self.initSlider(noUiSlider);
            }, 500);
           
        }
    }
    /**
     * Init selection slider
     */
    private initSlider(noUiSlider: any) {

        let self = this;
        let sliderAvailability = document.getElementById('slider_availability_' + self.availability.day) as any;
        let itWasInitializedAlready = sliderAvailability && sliderAvailability.querySelectorAll('.noUi-origin').length > 0;
        if (!itWasInitializedAlready) {
            noUiSlider.create(sliderAvailability, {
                // Create two timestamps to define a range.
                range: {
                    min: self.range_min_timestamp,
                    max: self.range_max_timestamp
                },
                format: { to: self.toFormat, from: Number },
                connect: [false, true, true, true, true],
                // Steps of one week
                step: 15 * 60 * 1000,
                // Two more timestamps indicate the handle starting positions.
                start: [self.amStart_initial_timestamp, self.amStop_initial_timestamp, self.pmStart_initial_timestamp, self.pmStop_initial_timestamp],
                tooltips: [true, true, true, true]
            });

            //// set different collors between intervals
            var connect = sliderAvailability.querySelectorAll('.noUi-origin');
            var classes = ['sliderinfo', 'sliderwarning', 'slidersuccess', '', ''];
            for (var i = 0; i < connect.length; i++) {
                if (classes[i].length > 0)
                    connect[i].classList.add(classes[i]);
            }

            sliderAvailability.noUiSlider.on('update', function (values, handle) {
                self.onSlide(values, handle);
            });
        }
    }

    /**
     * update values when slide happen
     * @param values 
     * @param handle 
     */
    private onSlide(values, handle) {
        let self = this;
        if (self.availability) {
            let selectedDate = values[handle];
            switch (handle) {
                case 0:
                    self.availability.amStart = selectedDate;
                    break;
                case 1:
                    self.availability.amStop = selectedDate;
                    break;
                case 2:
                    self.availability.pmStart = selectedDate;
                    break;
                case 3:
                    self.availability.pmStop = selectedDate;
                    break;
            }
        }

    }

    timestamp(str) {
        return new Date(str).getTime();
    }

    toFormat(v) {
        let date = new Date(v);

        var hours = ("0" + date.getHours()).slice(-2);
        var minutes = ("0" + date.getMinutes()).slice(-2) 

        return hours + ( date.getMinutes()  > 0 ? (":" + minutes) : '');
    }

}