import b from './b';
import './sideEffects';
import './a.css';

export function test() {
    b();
}

export function AShaking() {
    console.log('a shaking');
}
