import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalApiComponent } from './external-api.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ExternalApiComponent', () => {
  let component: ExternalApiComponent;
  let fixture: ComponentFixture<ExternalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalApiComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
