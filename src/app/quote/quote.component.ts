 
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Blair', 'Blaircarson', 'It always gets better.Believe!', new Date(2020, 3, 31)),
    new Quote(2, 'Blair', 'Abdifatah', "There is no true Liberation, without the liberation of a woman", new Date(2020, 3, 31)),
    new Quote(3, 'Blair', 'JWinston Churchill', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.', new Date(2020, 3, 31)),
    new Quote(3, 'Blair', 'Evans', 'Pupper likes expensive snacks', new Date(2020, 3, 31)),
    new Quote(3, 'Blair', 'Will Rogers', 'Don’t Let Yesterday Take Up Too Much Of Today.', new Date(2020, 3, 31)),
  ];


  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);

  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete this Quote:: "${this.quotes[index].description}?"`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}