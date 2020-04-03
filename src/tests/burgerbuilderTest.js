import {Selector} from 'testcafe';
import XPathSelector from '../main/utilities/xpath-selector';

fixture `Burger builder test suite`
.page`http://localhost:3009/`;
test('Validate salad is added to burger', async cb=>{
  
  const headerLink = XPathSelector('//*[@data-at-name="More Salad"]' );
  await cb
        .maximizeWindow()
        .click(headerLink);
        
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('inside timeout')
      resolve("done!")
    }, 2000)
  });

  let result = await promise;
});