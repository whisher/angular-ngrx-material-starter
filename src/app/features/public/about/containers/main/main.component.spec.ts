// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatCardModule } from '@angular/material/card';

// Components
import { PublicAboutMainComponent } from './main.component';

describe('PublicAboutMainComponent', () => {
  let component: PublicAboutMainComponent;
  let fixture: ComponentFixture<PublicAboutMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslatePipeStubsModule, MatCardModule],
        declarations: [PublicAboutMainComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
