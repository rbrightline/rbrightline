import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgrxComponent } from './ngrx.component';

describe('NgrxComponent', () => {
  let component: NgrxComponent;
  let fixture: ComponentFixture<NgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
