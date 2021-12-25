// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { AdminLayoutHeaderComponent } from './header.component';

describe('AdminLayoutHeaderComponent', () => {
  let component: AdminLayoutHeaderComponent;
  let fixture: ComponentFixture<AdminLayoutHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, MatToolbarModule],
        declarations: [AdminLayoutHeaderComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
