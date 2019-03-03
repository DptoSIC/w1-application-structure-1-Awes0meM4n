import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import { TagValueComponent } from './tag-value/tag-value.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [SocialComponent, TagValueComponent, HeroesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TagValueComponent,
    SocialComponent,
    HeroesComponent
  ]
})
export class SharedModule { }
