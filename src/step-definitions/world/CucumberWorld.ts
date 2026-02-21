import { World, setWorldConstructor, IWorldOptions} from "@cucumber/cucumber";
import { PageManager } from "../../page-objects/base/PageManager";
import { BasePage } from "../../page-objects/base/BasePage";
import { HomePage } from "../../page-objects/HomePage";
import { ContactUsPage } from "../../page-objects/ContactUsPage";

export class CucumberWorld extends World {
    public pageManager: PageManager;
    public basePage: BasePage;
    public homePage: HomePage;
    public contactUsPage: ContactUsPage;

    // You can add custom properties or methods here if needed
    // For example, you might want to store some state between steps

    // Base URL for the application under test
    private baseUrl?: string;

    // Person who is executing the tests
    private firstName?: string;
    private lastName?: string;
    private email?: string;

    // { attach, log, parameters } are provided by Cucumber framework. IWorldOptions are required in the 
    // constructor of the custom World class to inherit from the Cucumber World base class
    // and to initialize your PageManager and BasePage instances properly.
    constructor({ attach, log, parameters, link }: IWorldOptions) {
        super({ attach, log, parameters, link });
        this.pageManager = new PageManager();
        this.basePage = this.pageManager.createBasePage();
        this.homePage = this.pageManager.createHomePage();
        this.contactUsPage = this.pageManager.createContactUsPage();
    }

    // Setters for the baseUrl
    setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Setters for the firstName 
    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    // Setters for the lastName
    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    // Setters for the email
    setEmail(email: string) {
        this.email = email;
    }

    // Getters for the baseUrl
    getBaseUrl() {
        return this.baseUrl;
    }

    // Getters for the firstName
    getFirstName() {
        return this.firstName;
    }

    // Getters for the lastName
    getLastName() {
        return this.lastName;
    }

    // Getters for the email
    getEmail(){
        return this.email;
    }
}

// Register the custom World constructor
setWorldConstructor(CucumberWorld);