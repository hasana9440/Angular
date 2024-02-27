import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContavtComponent } from './contavt.component';

describe('ContavtComponent', () => {
  let component: ContavtComponent;
  let fixture: ComponentFixture<ContavtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContavtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContavtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
