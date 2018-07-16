import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})
export class StartComponent implements OnChanges {

   @Input() rating: number;
   starWidth: number;

   @Output() ratingClicked: EventEmitter<string> = 
              new EventEmitter();

    ngOnChanges(): void {
       this.starWidth = this.rating * 86/5;
    }

    starClicked(): void{
        //console.log('star clicked with rating value:' + this.rating);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
   

}