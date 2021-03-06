import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  public powers: Array<string> = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];

  public model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public submitted: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  newHero() { this.model = new Hero(100, '', ''); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
