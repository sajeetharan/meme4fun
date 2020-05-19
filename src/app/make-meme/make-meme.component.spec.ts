import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMemeComponent } from './make-meme.component';

describe('GenerateMemeComponent', () => {
  let component: MakeMemeComponent;
  let fixture: ComponentFixture<MakeMemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
