import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    date2: Date = new Date(2016, 5, 10);
    date3: Date;
    date4: Date;
    datepickerOpts: any = {
        startDate: new Date(2016, 5, 10),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        format: 'D, d MM yyyy'
    };
    timepickerOptions: any = {
        showSeconds: true,
        explicitMode: true,
        showMeridian: false,
        defaultTime: 'current',
        template: false
    };
    date5: Date = new Date();
    date6: Date = new Date();
    dateFrom: Date;
    dateTo: Date;
    datepickerToOpts: any = {};
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            date: [new Date(1991, 8, 12)]
        });
    }

    handleDateFromChange(dateFrom: Date) {
        // update the model
        this.dateFrom = dateFrom;

        // do not mutate the object or angular won't detect the changes
        this.datepickerToOpts = {
            startDate: dateFrom
        };
    }

    getDate(dt: Date): number {
        return dt && dt.getTime();
    }
}
