import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTooltipModule
    ]
})

export class MaterialModule {}