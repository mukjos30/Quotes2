import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';

import { DateCountPipe } from './date-count.pipe';
import { HighestVoteDirective } from './highest-vote.directive';

@NgModule({
  declarations: [
    AppComponent,
    
    QuoteDetailsComponent,
    QuoteFormComponent,
    QuoteComponent,
   
    DateCountPipe,
   
    HighestVoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
