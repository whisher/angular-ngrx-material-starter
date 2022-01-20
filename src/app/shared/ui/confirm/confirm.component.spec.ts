// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { DialogConfirmDto } from './confirm.model';

// Components
import { IwdfConfirmComponent } from './confirm.component';

describe('IwdfConfirmComponent', () => {
  let component: IwdfConfirmComponent;
  let fixture: ComponentFixture<IwdfConfirmComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  const model: DialogConfirmDto = {
    header: 'Are you really sure to do this?'
  };
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, MatDialogModule],
        declarations: [IwdfConfirmComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: model
          },
          {
            provide: MatDialogRef,
            useValue: mockDialogRef
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
