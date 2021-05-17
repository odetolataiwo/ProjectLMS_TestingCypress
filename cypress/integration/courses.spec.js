///<reference types="Cypress" />

import * as CourseComponent from '../components/courses_component'
import * as Utils from '../support/utils'


describe("Check courses functionalities", () => {

    context('check the functionality for an admin user', () => {
        
        beforeEach(() => {
            Utils.loginWithAPI('admin','admin')
            Utils.visitAPage('courses')
        })

        it('admin user should', () => {
            CourseComponent.deleteButton().should('be.visible')
        })

        it('should be able to add a new course correctly', () => {
            CourseComponent.newCourseInput().type('Learn Selenium')
            CourseComponent.newCourseButton().click()
            CourseComponent.deleteButton().should('have.length', 3)
        })

        it('should be able to delete a course correctly', () => {
            CourseComponent.deleteButton().last().click()
            CourseComponent.deleteButton().should('have.length', 2)
        })
    })

    context.only('check the functionality for an normal user', () => {
        
        beforeEach(() => {
            Utils.loginWithAPI('user','user')
            Utils.visitAPage('courses')
        })

        it('normal user should see all the courses correctly', () => {
            CourseComponent.courseName().should('be.visible')
            CourseComponent.courseName().should('have.length', 2)
        })
    })


})