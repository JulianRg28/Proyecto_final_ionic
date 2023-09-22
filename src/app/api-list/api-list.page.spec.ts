import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiListPage } from './api-list.page';

describe('ApiListPage', () => {
  let component: ApiListPage;
  let fixture: ComponentFixture<ApiListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApiListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
