import "./App.css";
import PersonCard from "./components/PersonCard";

const App = () => {
    const personObject = [
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 45,
            hairColor: "Black",
        },

        {
            firstName: "John",
            lastName: "Smith",
            age: 88,
            hairColor: "Brown",
        }

    ];

    return (
        <div className="App">
            {personObject.map((object, index) => (
                <PersonCard
                    key={index}
                    firstName={object.firstName}
                    lastName={object.lastName}
                    age={object.age}
                    hairColor={object.hairColor}
                />
            ))}
        </div>
    );
};

export default App;
