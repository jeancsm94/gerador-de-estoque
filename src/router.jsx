import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import React from "react";
import Home from "./pages/Home/Home";
import StockItems from "./pages/StockItems/StockItems";
import StockItem from "./pages/StockItem/StockItem";
import { NewItem } from "./pages/NewItem/NewItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/items/",
                element: <StockItems />,
                children: [
                    {
                        path: "edit/:id",
                        // path: "/items/:id", /items/:id
                        element: <StockItem />
                    },
                    {
                        path: "edit",
                        element: <NewItem />
                    }
                ]
            }
        ]
    }
])