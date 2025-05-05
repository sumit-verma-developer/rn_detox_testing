describe('Login Process', () => {
  beforeAll(async () => {
    await device.launchApp();

    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Login')).tap();
    await element(by.id('Email')).typeText('sumit@gmail.com');
    await element(by.id('Password')).typeText('12345678');
    await device.pressBack()
  });


  it('should fill email and password and navigate to home screen',async()=>{
    await expect(element(by.id('Login'))).toBeVisible()
    await element(by.id('Login')).tap();
    await expect(element(by.text('Testing Complete'))).toBeVisible()
  })
});
