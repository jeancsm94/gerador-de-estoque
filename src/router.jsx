import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import React from "react";
import Home from "./pages/Home/Home";
import StockItems from "./pages/StockItems/StockItems";
import StockItem from "./pages/StockItem/StockItem";
import { NewItem } from "./pages/NewItem/NewItem";
import loadProduct, { loadHomeProducts, loadListProducts } from "./loaders/products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: loadHomeProducts
            },
            {
                path: "/items/",
                element: <StockItems />,
                loader: loadListProducts,
                children: [
                    {
                        path: "item/:id",
                        element: <StockItem />,
                        loader: loadProduct
                    },
                    {
                        path: "edit",
                        loader: loadProduct,
                        element: <NewItem />
                    },
                    {
                        path: "edit/:id",
                        element: <NewItem />,
                        loader: loadProduct
                    },
                ]
            }
        ]
    }
])