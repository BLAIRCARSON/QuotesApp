import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Blaircarson', 'It always gets better Believe!', new Date(2020, 3,12)),
    new Quote(2, 'Steve Jobs', 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',new Date(2020, 3,12)),
    new Quote(3, 'Will Rodgers', 'Don’t Let Yesterday Take Up Too Much Of Today.', new Date(2020, 3,12)),
    new Quote(4, 'JonathanM', 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',new Date(2020, 3,12)),
    new Quote(5, 'Evans', 'Pupper likes expensive snacks',new Date(2020, 3,12)),
    new Quote(6, 'JWinston Churchill', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',new Date(2020, 3,12)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

completeQuote(isComplete, index){
  if(isComplete){
    this.quotes.splice(index, 1);
  }
}

  constructor() { }

  ngOnInit() {
  }

}
