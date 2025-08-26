import { render, screen } from "@testing-library/react";
import Blog from "../Blog";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

test('should load heading in Blog component', () => { 
    render(<Blog />);
    // Use the correct role and optionally match text
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

// test('should load button inside the Blog component', () => { 
//     render(<Blog />);
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
// });
test('should load button inside the Blog component',
     () => { 
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Body />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

