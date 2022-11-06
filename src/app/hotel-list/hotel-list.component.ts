import { Component, OnInit } from '@angular/core';
import { Ihotel } from './hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit  {



public title  = 'Liste hotels';

public hotels: Ihotel[] = [
  {
    hotelId: 1,
    hotelName: 'Dakar - sénégal',
    description: 'Hotel 5 etoiles',
    price: 199,
    imageUrl:'assets/img/indoors.jpg',
    rating: 5
  },
  {
    hotelId: 2,
    hotelName: 'Milan - italie',
    description: 'Hotel 4 etoiles',
    price: 189,
    imageUrl:'assets/img/hotel-room.jpg',
    rating: 3.5
  },
  {
    hotelId: 3,
    hotelName: 'Paris - france',
    description: 'Hotel 3 etoiles',
    price: 179,
    imageUrl:'assets/img/the-interior.jpg',
    rating: 4.7
  },
  {
    hotelId: 4,
    hotelName: 'Marakech - maroc  ',
    description: 'Hotel 2 etoiles',
    price: 169,
    imageUrl:'assets/img/window.jpg',
    rating: 2
  }
];


public showBadge!: boolean;

private _hotelFilter:string = 'mot';

public filteredHotels: Ihotel[] = [];

ngOnInit(): void {
  this.filteredHotels = this.hotels;
  this.hotelFilter = '';

}
public toogleIsNewBadge(): void{
  this.showBadge = !this.showBadge;

}
/** Recherche */
public get hotelFilter():string{
  return this._hotelFilter;
}

set hotelFilter(filter: string) {
  this._hotelFilter = filter;
  this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
}
private filterHotels(critere:string):Ihotel[]{
  critere =critere.toLowerCase();

  const res = this.hotels.filter(
    (hotel:Ihotel) => hotel.hotelName.toLocaleLowerCase().indexOf(critere) !== -1

  );
return res;

}
/** Recherche */
}
