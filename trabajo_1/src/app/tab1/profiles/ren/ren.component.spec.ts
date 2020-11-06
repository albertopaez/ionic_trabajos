import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenComponent } from './ren.component';

describe('RenComponent', () => {
  let component: RenComponent;
  let fixture: ComponentFixture<RenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
