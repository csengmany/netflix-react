import { render, screen } from "@testing-library/react";
import App from "./App";

// //test par défaut
test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Emissions TV/i);
    expect(linkElement).toBeInTheDocument();
});

// // Vérifier que la page contient bien le logo Netflix
it("displays a netflix logo", () => {
    const { container } = render(<App />);
    const logo = container.querySelector("#logo");
    expect(logo).toContainHTML("img");
    expect(logo.src).toContain("logo.png");
});
//privélégier les méthodes getbyqqchose / sans query selector
test("check if logo Netflix is in the document", () => {
    render(<App />);
    const imageElement = screen.getByAltText("netflix logo");
    expect(imageElement).toBeInTheDocument();
});

//Vérifier que la page contient bien 6 lignes d'images
it("displays 6 rows of images", async () => {
    render(<App />);
    // const rows = await screen.findAllByTestId("list");
    // expect(rows.length).toEqual(6);
    const rows = screen.getAllByTestId("list");
    expect(rows.length).toEqual(6);
});

// //utilser data-testid (cf esting-library)
// test("check if 6 lines of images are displayed", () => {
//     //pas l'élément Section sinon yaura qu'un seul movies-list-container
//     //il faut l'élément app pour en avoir 6
//     render(<App />);
//     const moviesLists = screen.getAllByTestId("movies-list-container");
//     // avec getByTestId on a une erreur car il y en a plusieurs dans ce cas il faut utilliser getAllByTestId
//     console.log(moviesLists); //tableau avec des objets complexes qui représentent les balises
//     expect(moviesLists.length).toEqual(6);
// });

//Vérifier que la page contient bien les titres "Emissions TV", "Séries françaises", "Comédies", "Nouveautés", "Documentaires" et "Séries US"
it("displays titles", async () => {
    const titles = [
        "Emissions TV",
        "Séries françaises",
        "Comédies",
        "Nouveautés",
        "Documentaires",
        "Séries US",
    ];
    render(<App />);
    titles.map((title) => {
        let linkElement = screen.getByText(title);
        expect(linkElement).toBeInTheDocument();
    });
});

// test("check if titles are in the document", () => {
//     render(<App />);
//     expect(screen.getByText("Emissions TV")).toBeInTheDocument();
//     expect(screen.getByText("Séries françaises")).toBeInTheDocument();
//     expect(screen.getByText("Comédies")).toBeInTheDocument();
//     expect(screen.getByText("Nouveautés")).toBeInTheDocument();
//     expect(screen.getByText("Documentaires")).toBeInTheDocument();
//     expect(screen.getByText("Séries US")).toBeInTheDocument();
// });
