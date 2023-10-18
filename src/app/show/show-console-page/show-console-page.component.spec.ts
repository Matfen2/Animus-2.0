import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConsolePageComponent } from './show-console-page.component';

describe('ShowConsolePageComponent', () => {
  let component: ShowConsolePageComponent;
  let fixture: ComponentFixture<ShowConsolePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowConsolePageComponent]
    });
    fixture = TestBed.createComponent(ShowConsolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
