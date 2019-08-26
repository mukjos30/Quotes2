import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, '-Tony Robbins', '"Success is doing what you want to do, when you want, where you want, with whom you want, as much as you want."', new Date(2018, 8, 15),0,0 ),
      new Quote(2, '-Theodore Roosevelt', '“It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”', new Date(2018, 8, 15),0,0 ),
      new Quote(3, '-Steve Jobs', '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”', new Date(2018, 8, 15),0,0 ),
      new Quote(4, '-Rob Siltanen', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”', new Date(2018, 8, 15),0,0 ),
       
    ]


    toogleDetails(index){
        this.Quotes[index].showDescription =!this.Quotes[index].showDescription;
    }

    addNewQuote(quote){
        let quoteLength = this.Quotes.length;
        quote.id=quote.Length+1
        quote.completeDate = new Date(quote.completeDate)
        this.Quotes.push(quote)

    }

    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
            
            if(toDelete){
                this.Quotes.splice(index,1)
            }
        }
    }

  likes=0
    dislike=0
    
    preNum:number
 lastNum:number
 counter:number
 highestUpvote(){
   this.preNum =0
   this.lastNum =0
   for(this.counter=0 ; this.counter < this.Quotes.length; this.counter++){
     this.lastNum = this.Quotes[this.counter].likes;
     if(this.lastNum > this.preNum){this.preNum = this.lastNum
    }
   }

return this.preNum
   
 }
 constructor() { }

 ngOnInit() {
 }

}