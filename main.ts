export function add(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

export function mul(a: number, b: number): number {
  return a * b;
}

export function div(a: number, b: number): number {
  return a / b;
}

export function sqr(a: number): number {
  return a * a;
}

if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  console.log("Sub 2 - 3 =", sub(2, 3));
  console.log("Mul 2 * 3 =", mul(2, 3));
  console.log("Div 2 / 3 =", div(2, 3));
  console.log("Sqr 2     =", sqr(2));
}
