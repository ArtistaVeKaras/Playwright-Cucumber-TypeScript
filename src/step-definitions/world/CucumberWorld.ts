import { World, setWorldConstructor } from "@cucumber/cucumber";

export class CucumberWorld extends World {
    // You can add custom properties or methods here if needed
    // For example, you might want to store some state between steps
    // Base URL for the application under test
    private baseUrl?: string;


    // Person who is executing the tests
    private firstName?: string;
    private lastName?: string;
    private email?: string;

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