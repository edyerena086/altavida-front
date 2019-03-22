import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material design
import { MaterialModule } from '../libs/materials';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { MainFormComponent } from './main-form/main-form.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionFourComponent } from './section-four/section-four.component';

@NgModule({
  declarations: [MainFormComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    MaterialModule
  ]
})
export class EvaluationModule { }
