import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import LoginScreen from '../screenobjects/pro.login.screen';

describe('Provider can login to PROS App', () => {
    beforeEach(() => {
        // TBD
    });

    it('should be able login successfully', () => {
        ProLoginScreen.landingPageSignInButon.click();
        ProLoginScreen.email.setValue('61@ls.com');
        ProLoginScreen.password.setValue('mow814');
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
        ProLoginScreen.signInButton.click();
    });
});
