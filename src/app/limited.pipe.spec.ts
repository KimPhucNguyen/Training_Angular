import { LimitedPipe } from './limited.pipe';

describe('LimitedPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitedPipe();
    expect(pipe).toBeTruthy();
  });
});
