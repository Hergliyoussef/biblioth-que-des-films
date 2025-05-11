import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFimComponent } from './ajouter-film.component';

describe('AjouterFimComponent', () => {
  let component: AjouterFimComponent;
  let fixture: ComponentFixture<AjouterFimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterFimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
