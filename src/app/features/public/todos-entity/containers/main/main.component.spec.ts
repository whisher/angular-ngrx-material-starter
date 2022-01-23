// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatCardModule } from '@angular/material/card';

// Components
import { PublicTodosEntityMainComponent } from './main.component';

describe('PublicTodosEntityMainComponent', () => {
  let component: PublicTodosEntityMainComponent;
  let fixture: ComponentFixture<PublicTodosEntityMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatCardModule],
        declarations: [PublicTodosEntityMainComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTodosEntityMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
