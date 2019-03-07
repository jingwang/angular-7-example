import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(id: number): void {
    this.heroService.getHero(id).subscribe((res) => {
      this.selectedHero = res;
    });
  }
}
