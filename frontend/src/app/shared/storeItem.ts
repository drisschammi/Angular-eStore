// `signal` is a new reactive primitive in Angular that lets us manage and track changes in data (like state).
// `Signal<T>` is a TypeScript type that represents a reactive value of type `T`.
import { signal, Signal } from '@angular/core';

// This class is meant to handle some piece of data (called "state") in a reactive way.
  // The `<T>` means it can be used with *any* type of data — string, number, object, etc.
export class StoreItem<T> {

  // `private readonly` means it cannot be changed from outside this class and cannot be reassigned after it's set.
  // We initialize it with a placeholder value: `null as unknown as T`-> This is a TypeScript trick to avoid errors at initialization, since we don't have the real data yet.
  private readonly _state = signal<T>(null as unknown as T);

  // The constructor is marked as `protected`, meaning only this class and its subclasses can create instances.
  // This encourages using this class as a base (i.e., to be extended), not directly instantiated.
  // It accepts an `initialState`, which is the starting value of our state, and sets it.
  protected constructor(initialState: T) {
    this._state.set(initialState); // Set the initial value into our signal
  }

  // This method allows updating the current state with a new value.
  // Again, it's `protected` so only child classes can use it not outside code.
  protected setValue(newValue: T): void {
    this._state.set(newValue); // Set a new value into our signal
  }

  // This is a getter (a special function that acts like a property).
  // It gives read access to the current value stored in `_state`.
  protected get value(): T {
    return this._state(); // Calling the signal returns its current value
  }

  // This getter exposes a read-only version of the signal.
  // Other parts of the app can "watch" this signal for changes, but can't update it.
  // It’s useful when we want components to respond to changes without allowing them to modify the state.
  protected get value$(): Signal<T> {
    return this._state.asReadonly(); // Returns a signal that can't be updated directly
  }
}