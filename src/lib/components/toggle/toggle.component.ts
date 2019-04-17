import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type FIELD_TYPE = boolean;
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

    public state: FIELD_TYPE;

    /** Form control on change handler */
    public _onChange: (_: FIELD_TYPE) => void;
    /** Form control on touch handler */
    public _onTouch: (_: FIELD_TYPE) => void;

    /**
     * Toggle state of component
     */
    public toggle() {
        this.state = !this.state;
        if (this._onChange) {
            this._onChange(this.state);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: FIELD_TYPE) {
        this.state = value;
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: FIELD_TYPE) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: FIELD_TYPE) => void): void {
        this._onTouch = fn;
    }
}
