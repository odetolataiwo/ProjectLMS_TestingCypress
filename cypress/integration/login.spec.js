///<reference types="Cypress" />

import * as LoginComponent from '../components/login_component'
import * as HeaderComponent from '../components/header_component'
import * as CourseComponent from '../components/courses_component'
import * as Utils from '../support/utils'

describe("Test all login features", () => {
    beforeEach(() => {
        Utils.visitAPage('login')
    })

    it('Login with valid email and password for a normal user', () => {
        LoginComponent.performLogin('user','user')
        CourseComponent.coursesLink().click()
        Utils.checkUrl().should('contain', '/courses')
        HeaderComponent.logoutButton().should('be.visible')
    })

    it('login as an admin properly', function() {
        LoginComponent.performLogin('admin','admin')
        CourseComponent.coursesLink().click()
        Utils.checkUrl().should('contain', '/courses')
        HeaderComponent.logoutButton().should('be.visible')
        CourseComponent.deleteButton().should('be.visible') 
    });
})