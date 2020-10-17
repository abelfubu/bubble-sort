import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
