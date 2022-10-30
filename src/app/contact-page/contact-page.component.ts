import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email:string = "";
  message: string = "";
  listing: Listing = {
    name: "",
    description: "",
    id: "",
    price: 1,
    views: 1
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeListings.find(listing => listing.id === id) as Listing;
    this.message = `I am interested in ${this.listing.name}`;
  }

  sendMessage():void{
    alert("Your message has been sent");
    this.router.navigateByUrl("/listings");
  }
}
