import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattressList } from './mattress-list';

describe('MattressList', () => {
  let component: MattressList;
  let fixture: ComponentFixture<MattressList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MattressList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattressList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
