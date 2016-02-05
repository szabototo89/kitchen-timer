export default function assign<A, B, C>(a: A = undefined, b: B = undefined, c: C = undefined): A & B & C {
  return (Object as any).assign(a, b, c);
}