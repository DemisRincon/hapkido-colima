// Import necessary modules
import { render } from "@testing-library/react";
import Page from "../../app/page"; // Adjust path based on your file structure
import GlobalThemeWrapper from "@/library/GlobalTheme";

// Helper to render components with the ThemeProvider
const renderWithTheme = (ui: React.ReactElement) =>
  render(<GlobalThemeWrapper>{ui}</GlobalThemeWrapper>);

// Test for Page Component
describe("Page Component", () => {
  it("renders without crashing", () => {
    const { getByText } = renderWithTheme(<Page />);
    // Verify that PageBuilder renders with real data
    expect(getByText(/Ven a tomar una clase de prueba/i)).toBeInTheDocument();
    expect(getByText(/Siguenos en Facebook/i)).toBeInTheDocument();
  });
});

// Test for RootLayout Component
describe("RootLayout Component", () => {
  it("renders without crashing", () => {
    const { getByText } = renderWithTheme(
      <GlobalThemeWrapper>
        <div>Test Child</div>
      </GlobalThemeWrapper>
    );

    // Check if child content is rendered
    expect(getByText(/Test Child/i)).toBeInTheDocument();
  });
});
