import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinnComponent } from './finn.component';

describe('FinnComponent', () => {
  let component: FinnComponent;
  let fixture: ComponentFixture<FinnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
