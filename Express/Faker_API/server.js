const express = require("express");
const app = express();
const faker = require("faker");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
    const newFakeUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFakeUser;
};

const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFakeCompany = {
        companyName: faker.company.companyName(),
        department: faker.commerce.department(),
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newFakeCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    console.log("new user:");
    console.log(newUser);

    response.json(newUser);
});

app.get("api/companies/new", (request, response) => {
    let newCompany = createCompany();

    console.log("new company:");
    console.log(newCompany);

    response.json(newCompany);

    newCompany.department = faker.commerce.department();
    console.log("updated company department:");
    console.log(newCompany);

    response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
    let newUser = createUser();
    let newCompany = createCompany();

    console.log("new user:");
    console.log(newUser);

    console.log("new company:");
    console.log(newCompany);

    response.json({ user: newUser, company: newCompany });
});

app.listen(8000, () => console.log("Listening on port 8000"));
