// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatCardModule } from '@angular/material/card';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Components
import { PublicHomeMainComponent } from './main.component';

describe('PublicHomeMainComponent', () => {
  let component: PublicHomeMainComponent;
  let fixture: ComponentFixture<PublicHomeMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslatePipeStubsModule,
          MatCardModule,
          IwdfFortawesomeModule
        ],
        declarations: [PublicHomeMainComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
