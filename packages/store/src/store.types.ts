import { State } from "zustand";

// WIP change to d.ts
export declare type SetState<T extends State> = {
  _(partial: T | Partial<T> | ((state: T) => T | Partial<T>)): void;
}["_"];

export declare type GetState<T extends State> = () => T;

export declare type Destroy = () => void;
