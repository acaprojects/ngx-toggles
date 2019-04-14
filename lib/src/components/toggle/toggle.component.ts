import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'a-toggle[basic]',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleComponent),
            multi: true
        }
    ]
})
export class ToggleComponent implements ControlValueAccessor {
    /** ID of the checkbox element */
    @Input() public id: string;
    /** CSS class to add to the root element of the component */
    @Input() public klass = 'default';
    /** State of the checkbox */
    @Input() public model: boolean;
    /** Change emitter for the date timestamp */
    @Output() public modelChange = new EventEmitter<boolean>();

    /** Form control on change handler */
    public onChange: (_: boolean) => void;
    /** Form control on touch handler */
    public onTouch: (_: boolean) => void;

    /**
     * Toggle state of component
     */
    public toggle() {
        this.model = !this.model;
        this.modelChange.emit(this.model);
    }

    /**
     * Update local value when form control value is changed
     * @param value
     */
    public writeValue(value: boolean) {
        this.model = value;
        this.modelChange.emit(this.model);
    }

    /**
     * Register on change callback given for form control
     * @param fn
     */
    public registerOnChange(fn: (_: boolean) => void): void {
        this.onChange = fn;
    }

    /**
     * Register on touched callback given for form control
     * @param fn
     */
    public registerOnTouched(fn: (_: boolean) => void): void {
        this.onTouch = fn;
    }
}
