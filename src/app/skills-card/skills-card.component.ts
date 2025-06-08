import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.css'
})
export class SkillsCardComponent {
  @Input('skillName')
  skillName = '';

  @Input('skillImagePath')
  projectImagePath = '';

  @Input('Description')
  Description = '';

  @Input('siNO')
  siNO = '';

}
