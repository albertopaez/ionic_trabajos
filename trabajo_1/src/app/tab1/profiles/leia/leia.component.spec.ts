import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeiaComponent } from './leia.component';

describe('LeiaComponent', () => {
  let component: LeiaComponent;
  let fixture: ComponentFixture<LeiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeiaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
