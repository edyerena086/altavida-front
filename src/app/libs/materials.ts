import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {}