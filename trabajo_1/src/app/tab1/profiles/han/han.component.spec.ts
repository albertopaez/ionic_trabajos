import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HanComponent } from './han.component';

describe('HanComponent', () => {
  let component: HanComponent;
  let fixture: ComponentFixture<HanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
