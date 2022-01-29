// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// Components
import { PublicUserMainComponent } from './main.component';

describe('PublicUserMainComponent', () => {
  let component: PublicUserMainComponent;
  let fixture: ComponentFixture<PublicUserMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MatCardModule, MatListModule],
        declarations: [PublicUserMainComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
