// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Ngrx
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';

// Store
import { TodoStoreService } from '@domains/todos/todos-data';
import { DomainsTodosDataModule } from '@domains/todos/todos-data';

// Ui
import { IwdfSpinnerModule } from '@shared/ui/spinner';
import { IwdfTodosModule } from '@shared/ui/todos';

// Components
import { PublicTodosDataMainComponent } from './main.component';

describe('PublicTodosDataMainComponent', () => {
  let component: PublicTodosDataMainComponent;
  let fixture: ComponentFixture<PublicTodosDataMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          DomainsTodosDataModule,
          ReactiveComponentModule,
          MatCardModule,
          IwdfSpinnerModule,
          IwdfTodosModule
        ],
        declarations: [PublicTodosDataMainComponent],
        providers: [Store, TodoStoreService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTodosDataMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
