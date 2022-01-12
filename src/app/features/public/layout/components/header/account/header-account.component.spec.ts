// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipeStubsModule } from '@testing';

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
        imports: [
          RouterTestingModule,
          TranslatePipeStubsModule,
          MatMenuModule,
          IwdfFortawesomeModule
        ],
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
