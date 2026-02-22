import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture';
import { HomePage } from '../HomePage';
import { ContactUsPage } from '../ContactUsPage';


/**
 * PageManager
 *
 * Simple factory/registry for page objects and access to the current Playwright Page.
 *
 * Responsibilities:
 * - Expose the active Playwright `Page` from the test fixture.
 * - Create and return instances of page objects (BasePage, HomePage, ContactUsPage).
 * - Centralize page-object construction for use in step definitions and tests.
 *
 * Analogy: Acts like a receptionist who directs a visitor to the correct employee
 * and hands that employee the visitor's file (the active browser Page).
 */
export class PageManager {
    get page(): Page {
        return pageFixture.page;
    }

    createBasePage(): BasePage {
        return new BasePage();
    }

    createHomePage(): HomePage{
        return new HomePage();
    }

    createContactUsPage(): ContactUsPage {
        return new ContactUsPage();
    }
}