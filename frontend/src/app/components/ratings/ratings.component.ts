import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-ratings',
  imports: [FontAwesomeModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {

  score = input<number>(0);

  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  // Compured signs for stars
  /*
      Step-by-Step Example: score = 3.5
      ---------------------------------
      1. Clamp score to 5:
        const value = Math.min(3.5, 5); // value = 3.5

      2. Create empty icon array:
        const icons: IconDefinition[] = [];

      3. Calculate number of full stars:
        const solid = Math.floor(3.5); // solid = 3

      4. Check if there's a half star:
        const half = 3.5 - 3 >= 0.5; // true

      5. Add full stars:
        icons.push(faStar) → 3 times
        Result: [faStar, faStar, faStar]

      6. Add half star:
        icons.push(faStarHalfStroke)
        Result: [faStar, faStar, faStar, faStarHalfStroke]

      7. Fill up remaining with empty stars:
        icons.push(faStarEmpty)
        Final Result: [faStar, faStar, faStar, faStarHalfStroke, faStarEmpty]

      Rendered Output:
      ★ ★ ★ ⯨ ☆
    */
  stars = computed(()=>{
    const value = Math.min(this.score(), 5);
    const icons: IconDefinition[] = [];
    
    const solid = Math.floor(value);
    const half = value - solid >= 0.5;

    for(let i=0; i<solid; i++){
      icons.push(this.faStar);
    }

    if(half){
      icons.push(this.faStarHalfStroke);
    }

    while(icons.length < 5){
      icons.push(this.faStarEmpty);
    }

    return [...icons];

  });

}
