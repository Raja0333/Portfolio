import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
   @Input('projectName')
  projectName = '';

  @Input('projectImagePath')
  projectImagePath = '';

  @Input('techStack')
  techStack = '';

  @Input('Description')
  Description = '';

  @Input('liveDemoLink')
  liveDemoLink = '';

  @Input('repoLink')
  repoLink = '';




}
