import React from "react";
import {screen,cleanup,render} from "@testing-library/react";
import'@testing-library/jest-dom'
import App from "./app";



describe('App',()=>{
    test('should render todo list',()=>{
        render(<App/>);
        expect(screen.getByText(/TodoMVC/i)).toBeInTheDocument();
    })

})

