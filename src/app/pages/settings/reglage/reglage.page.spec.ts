import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReglagePage } from './reglage.page';

describe('ReglagePage', () => {
  let component: ReglagePage;
  let fixture: ComponentFixture<ReglagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReglagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
