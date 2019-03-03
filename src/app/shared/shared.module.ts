import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import { TagValueComponent } from './tag-value/tag-value.component';

@NgModule({
  declarations: [SocialComponent, TagValueComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TagValueComponent,
    SocialComponent
  ]
})
export class SharedModule { }
