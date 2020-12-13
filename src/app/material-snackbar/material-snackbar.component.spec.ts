import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSnackbarComponent } from './material-snackbar.component';

describe('MaterialSnackbarComponent', () => {
  let component: MaterialSnackbarComponent;
  let fixture: ComponentFixture<MaterialSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
