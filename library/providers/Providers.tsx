'use client';
import GlobalStyles from "./GlobalStyles";
import GlobalThemeWrapper from "./GlobalTheme";
import StyledComponentsRegistry from "./registry";
import ReduxProvider from "./ReduxProvider";
const Providers: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <GlobalThemeWrapper>
                <GlobalStyles />
                <ReduxProvider>
                {children}
                </ReduxProvider>
            </GlobalThemeWrapper>
        </StyledComponentsRegistry>
    );
};
export default Providers;