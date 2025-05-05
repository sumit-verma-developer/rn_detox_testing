describe('Register Process', () => {
    beforeAll(async () => {
      await device.launchApp();
  
      await waitFor(element(by.id('OnboardingScreen')))
        .toBeVisible()
        .withTimeout(5000);
      await element(by.text('Next')).tap();
      await element(by.text('Next')).tap();
      await element(by.text('Sign up')).tap();
      await element(by.id('first_name')).typeText('sumit');
      await element(by.id('last_name')).typeText('verma');
      await element(by.id('email')).typeText('sumit@gmail.com');
      await element(by.id('password')).typeText('12345678');
      await device.pressBack()
    });
  
  
    it('should fill email and password and navigate to home screen',async()=>{
      await expect(element(by.id('Register'))).toBeVisible()
      await element(by.id('Register')).tap();
    //   await expect(element(by.text('Testing Complete'))).toBeVisible()
    })
  });
  