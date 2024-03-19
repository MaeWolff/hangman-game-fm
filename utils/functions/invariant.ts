const INVARIANT_PREFIX = "Invariant failed";

export default function invariant(
  condition: unknown,
  message: string | (() => string),
): asserts condition {
  if (condition) return;

  const invariantMessage: string =
    typeof message === "function" ? message() : message;
  const value = `${INVARIANT_PREFIX}: ${invariantMessage}`;

  throw new Error(value);
}
