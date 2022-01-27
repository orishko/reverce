import reverse from "../src/reverse";

test('reverse', () => {
  const str = 'hello';

 expect(reverse(str)).toEqual('olleh');
})