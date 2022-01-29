// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';

// Store
import { TodosEntityFacade } from '@domains/todos/todos-entity';
import { todosEntityReducer } from '@domains/todos/todos-entity/store/todos-entity.reducer';

// UI
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfSpinnerModule } from '@shared/ui/spinner';
import { IwdfTodosModule } from '@shared/ui/todos';

// Components
import { PublicTodosEntityMainComponent } from './main.component';

describe('PublicTodosEntityMainComponent', () => {
  let component: PublicTodosEntityMainComponent;
  let fixture: ComponentFixture<PublicTodosEntityMainComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveComponentModule,
          StoreModule.forRoot({
            todos_entity: todosEntityReducer
          }),
          MatCardModule,
          IwdfAlertModule,
          IwdfSpinnerModule,
          IwdfTodosModule
        ],
        declarations: [PublicTodosEntityMainComponent],
        providers: [Store, TodosEntityFacade]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTodosEntityMainComponent);
    component = fixture.componentInstance;
    component.vm$ = of({ error: null, loading: true, todos: [], total: 0 });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
