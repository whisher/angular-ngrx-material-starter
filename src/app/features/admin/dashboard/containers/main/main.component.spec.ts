// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { AdminDashboardMainComponent } from './main.component';

describe('AdminDashboardMainComponent', () => {
  let component: AdminDashboardMainComponent;
  let fixture: ComponentFixture<AdminDashboardMainComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [AdminDashboardMainComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
