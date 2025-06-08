import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfilesComponent } from './social-profiles.component';

describe('SocialProfilesComponent', () => {
  let component: SocialProfilesComponent;
  let fixture: ComponentFixture<SocialProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
