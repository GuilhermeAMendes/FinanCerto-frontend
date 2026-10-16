// Types
export type EitherDirection = "left" | "right";
export type Either<L, R> = Left<L> | Right<R>;

// Classes
export class Left<L> {
  readonly tag: EitherDirection = "left";
  constructor(public readonly value: L) {}
}

export class Right<R> {
  readonly tag: EitherDirection = "right";
  constructor(public readonly value: R) {}
}

// Constructors
export const left = <L>(value: L): Either<L, never> => new Left(value);
export const right = <R>(value: R): Either<never, R> => new Right(value);

// Guard functions
export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> =>
  either.tag === "left";

export const isRight = <L, R>(either: Either<L, R>): either is Right<R> =>
  either.tag === "right";