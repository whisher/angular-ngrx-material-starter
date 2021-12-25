// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PublicLayoutFooterComponent } from './footer.component';

describe('PublicLayoutFooterComponent', () => {
  let component: PublicLayoutFooterComponent;
  let fixture: ComponentFixture<PublicLayoutFooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [PublicLayoutFooterComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
