export interface Sticky {
    refresh(): void
    remove(): void
}

type SingleOrMany<T> = T | Iterable<T>

export function add(elements: SingleOrMany<HTMLElement>): Sticky[]

export function refreshAll(): void

export function remove(elements: SingleOrMany<HTMLElement>): void
export function removeAll(): void

export function setScrollContainer(element: HTMLElement): void;

export function forceSticky(): void;

export const stickies: Sticky[];

