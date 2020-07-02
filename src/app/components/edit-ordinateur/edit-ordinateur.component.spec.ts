import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdinateurComponent } from './edit-ordinateur.component';

describe('EditOrdinateurComponent', () => {
  let component: EditOrdinateurComponent;
  let fixture: ComponentFixture<EditOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
