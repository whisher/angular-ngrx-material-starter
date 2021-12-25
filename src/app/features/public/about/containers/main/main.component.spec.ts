// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PublicAboutMainComponent } from './main.component';

describe('PublicAboutMainComponent', () => {
  let component: PublicAboutMainComponent;
  let fixture: ComponentFixture<PublicAboutMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
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
