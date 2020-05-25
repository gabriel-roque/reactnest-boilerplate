import { randomUserApi } from 'core/providers';

describe('test for valid integration with API random users', () => {
  it('should api random user status code equals a 200', async () => {
    await randomUserApi.get('').then(resp => {
      expect(resp.status).toEqual(200);
    });
  });
});
