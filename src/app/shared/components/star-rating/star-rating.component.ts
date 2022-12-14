import { style } from "@angular/animations";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector:'app-star-rating',
  templateUrl:'./star-rating.component.html',
  styleUrls:['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{

  public starWidth!: number;

  @Input()
  public rating: number = 2;
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 125 / 5;
  }


}
