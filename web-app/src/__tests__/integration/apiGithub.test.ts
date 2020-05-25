import { github } from 'core/providers';

describe('tests for valid integration with API github', () => {
  it('should api github return status code equals a 200 ', async () => {
    await github.get('').then(resp => {
      expect(resp.status).toEqual(200);
    });
  });
});
