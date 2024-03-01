import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { Componente3 } from './componente3.component';

describe('Componente3Component', () => {
  let component: Componente3;
  let fixture: ComponentFixture<Componente3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], 
      declarations: [Componente3] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

