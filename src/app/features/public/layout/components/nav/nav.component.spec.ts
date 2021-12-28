// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// Components
import { PublicLayoutNavComponent } from './nav.component';

describe('PublicLayoutFooterComponent', () => {
  let component: PublicLayoutNavComponent;
  let fixture: ComponentFixture<PublicLayoutNavComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MatDividerModule, MatListModule],
        declarations: [PublicLayoutNavComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
