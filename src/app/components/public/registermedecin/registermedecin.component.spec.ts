import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermedecinComponent } from './registermedecin.component';

describe('RegistermedecinComponent', () => {
  let component: RegistermedecinComponent;
  let fixture: ComponentFixture<RegistermedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
