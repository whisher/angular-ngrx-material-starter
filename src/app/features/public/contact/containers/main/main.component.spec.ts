// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatCardModule } from '@angular/material/card';

// Components
import { PublicContactMainComponent } from './main.component';

describe('PublicContactMainComponent', () => {
  let component: PublicContactMainComponent;
  let fixture: ComponentFixture<PublicContactMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslatePipeStubsModule, MatCardModule],
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
