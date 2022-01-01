// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatSelectModule } from '@angular/material/select';

// Components
import { PublicLayoutLangPickerComponent } from './lang-picker.component';

describe('PublicLayoutLangPickerComponent', () => {
  let component: PublicLayoutLangPickerComponent;
  let fixture: ComponentFixture<PublicLayoutLangPickerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatSelectModule],
        declarations: [PublicLayoutLangPickerComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutLangPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
