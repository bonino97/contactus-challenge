import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingComponent } from './pricing.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingComponent],
      imports: [ButtonModule, BadgeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title "PRICING PLANS"', () => {
    expect(compiled.querySelector('.text-100')!.textContent).toContain(
      'PRICING PLANS'
    );
  });

  it('should render "Get the Best Option Now"', () => {
    expect(
      compiled.querySelector('.font-bold.text-2xl')!.textContent
    ).toContain('Get the Best Option Now');
  });

  it('should render three pricing options', () => {
    const pricingOptions = compiled.querySelectorAll('.col-12');
    expect(pricingOptions.length).toBe(3);
  });

  it('should render "Most Popular" badge for the second pricing option', () => {
    const pricingOptions = compiled.querySelectorAll('.col-12');
    const secondPricingOption = pricingOptions[1];
    const badge = secondPricingOption.querySelector('p-badge');
    expect(badge!.textContent).toContain('Most Popular');
  });
});
