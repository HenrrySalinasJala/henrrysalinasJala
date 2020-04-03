import { Selector } from 'testcafe'

fixture`Getting Started`
  .page`https://devexpress.github.io/testcafe/example/`;

test('Test open sample test cafe page', async t => {
  console.log('inside the test');

  await t.typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('inside timeout')
      resolve("done!")
    }, 2000)
  });

  let result = await promise; // wait until the promise resolves (*)
  console.log('**********************************')
  console.log(result);
});