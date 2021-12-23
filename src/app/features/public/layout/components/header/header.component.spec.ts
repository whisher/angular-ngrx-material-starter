// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

// Components
import { PublicLayoutHeaderComponent } from './header.component';

// Mocks
@Component({
  selector: 'public-layout-header-account',
  template: ''
})
export class MockPublicLayoutHeaderAccountComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
}

describe('PublicLayoutHeaderComponent', () => {
  let component: PublicLayoutHeaderComponent;
  let fixture: ComponentFixture<PublicLayoutHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatBadgeModule, MatButtonModule],
        declarations: [
          MockPublicLayoutHeaderAccountComponent,
          PublicLayoutHeaderComponent
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
