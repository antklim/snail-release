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

export function sqrt(a: number): number {
  return Math.sqrt(a);
}

export function sin(a: number): number {
  return Math.sin(a);
}

export function cos(a: number): number {
  return Math.cos(a);
}

if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  console.log("Sub 2 - 3 =", sub(2, 3));
  console.log("Mul 2 * 3 =", mul(2, 3));
  console.log("Div 2 / 3 =", div(2, 3));
  console.log("Sqr 2     =", sqr(2));
  console.log("Sqrt2     =", sqrt(2));
  console.log("Sin 2     =", sin(2));
  console.log("Cos 2     =", cos(2));
}
