import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirective } from './structure-directive';

describe('StructureDirective', () => {
  let component: StructureDirective;
  let fixture: ComponentFixture<StructureDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
