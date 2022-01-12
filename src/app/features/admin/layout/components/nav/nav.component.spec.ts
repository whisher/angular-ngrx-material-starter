// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatListModule } from '@angular/material/list';

// Components
import { AdminLayoutNavComponent } from './nav.component';

describe('PublicLayoutFooterComponent', () => {
  let component: AdminLayoutNavComponent;
  let fixture: ComponentFixture<AdminLayoutNavComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MatListModule],
        declarations: [AdminLayoutNavComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
