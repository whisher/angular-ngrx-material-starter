// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PublicContactMainComponent } from './main.component';

describe('PublicContactMainComponent', () => {
  let component: PublicContactMainComponent;
  let fixture: ComponentFixture<PublicContactMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [PublicContactMainComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicContactMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
