// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatMenuModule } from '@angular/material/menu';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Components
import { PublicLayoutHeaderAccountComponent } from './header-account.component';

describe('PublicLayoutHeaderAccountComponent', () => {
  let component: PublicLayoutHeaderAccountComponent;
  let fixture: ComponentFixture<PublicLayoutHeaderAccountComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatMenuModule, IwdfFortawesomeModule],
        declarations: [PublicLayoutHeaderAccountComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutHeaderAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
