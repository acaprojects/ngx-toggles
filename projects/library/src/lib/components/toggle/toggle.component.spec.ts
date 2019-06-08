import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ACustomEventsModule } from '@acaprojects/ngx-custom-events';

import { AToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
    let fixture: ComponentFixture<AToggleComponent>;
    let component: AToggleComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AToggleComponent],
            imports: [ACustomEventsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AToggleComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create a toggle', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should have a knob', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.knob')).toBeTruthy();
    }));

    it('should toggle state', async(() => {
        expect(component.state).toBeFalsy();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.active')).toBeFalsy();
        component.toggle();
        fixture.detectChanges();
        expect(component.state).toBeTruthy();
        expect(compiled.querySelector('.active')).toBeTruthy();
    }));

    it('should toggle state from being tapped', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.active')).toBeFalsy();
        const block: HTMLDivElement = compiled.querySelector('.block');
        block.dispatchEvent(new Event('tapped'));
        fixture.detectChanges();
        expect(component.state).toBeTruthy();
        expect(compiled.querySelector('.active')).toBeTruthy();
    }));
});
