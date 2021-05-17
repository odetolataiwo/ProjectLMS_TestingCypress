
import * as Utils from '../support/utils'
import * as HeaderComponent from '../components/header_component'



describe('Test logout function', () => {

    it('admin user should be able to logout correctly ', () => {
        Utils.loginWithAPI('admin','admin')
        Utils.visitAPage('courses')
    })

    it('normal user should be able to logout correctly ', () => {
        Utils.loginWithAPI('user','user')
        Utils.visitAPage('courses')
        HeaderComponent.logoutButton().click()
        Utils.checkUrl().should('contain', '/notloggedin')
    })

})