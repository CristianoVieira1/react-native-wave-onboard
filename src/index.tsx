import Onboard from './components/Onboard';

export { Onboard };

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
