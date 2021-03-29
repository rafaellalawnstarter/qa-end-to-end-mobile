import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import LoginScreen from '../screenobjects/pro.login.screen';

describe('Provider can login to PROS App', () => {
    beforeEach(() => {
        // TabBar.waitForTabBarShown(true);
        // TabBar.openLogin();
        // LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', () => {
        ProLoginScreen.landingPageSignInButon.click();
        ProLoginScreen.email.setValue('61@ls.com');
        ProLoginScreen.password.setValue('mow814');
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
        ProLoginScreen.signInButton.click();

        // LoginScreen.loginContainerButon.click();
        // LoginScreen.email.setValue('test@webdriver.io');
        // LoginScreen.password.setValue('Test1234!');
        // LoginScreen.loginButton.click();
        // LoginScreen.alert.waitForIsShown();
        // expect(LoginScreen.alert.text()).toEqual('Success\nYou are logged in!');

        // LoginScreen.alert.pressButton('OK');
        // LoginScreen.alert.waitForIsShown(false);
    });

    // xit('should be able sign up successfully', () => {

    // });
});
