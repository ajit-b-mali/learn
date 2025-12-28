import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import axios from "axios";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router-dom";

vi.mock("axios");

describe("HomePage component", () => {
    let loadCart;

    beforeEach(() => {
        loadCart = vi.fn();

        axios.get.mockImplementation(async (urlPath) => {
            if (urlPath === "/api/products") {
                return {
                    data: [
                        {
                            "keywords": [
                                "socks",
                                "sports",
                                "apparel"
                            ],
                            "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                            "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
                            "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
                            "rating": {
                                "stars": 4.5,
                                "count": 87
                            },
                            "priceCents": 1090,
                            "createdAt": "2025-12-14T06:06:32.727Z",
                            "updatedAt": "2025-12-14T06:06:32.727Z"
                        },
                        {
                            "keywords": [
                                "sports",
                                "basketballs"
                            ],
                            "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                            "image": "images/products/intermediate-composite-basketball.jpg",
                            "name": "Intermediate Size Basketball",
                            "rating": {
                                "stars": 4,
                                "count": 127
                            },
                            "priceCents": 2095,
                            "createdAt": "2025-12-14T06:06:32.728Z",
                            "updatedAt": "2025-12-14T06:06:32.728Z"
                        }
                    ]

                }
            }
        });
    });

    it("displays the products correct", async () => {
        render(
            <MemoryRouter>
                <HomePage cart={[]} loadCart={loadCart} />
            </MemoryRouter>
        );

        const productContainer = await screen.findAllByTestId("product-container");
        expect(productContainer).toHaveLength(2);

        within(productContainer[0], () => {
            expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")).toBeInTheDocument();
            expect(screen.getByText("$10.90")).toBeInTheDocument();
            expect(screen.getByText("87")).toBeInTheDocument();
        });

        within(productContainer[1], () => {
            expect(screen.getByText("Intermediate Size Basketball")).toBeInTheDocument();
            expect(screen.getByText("$20.95")).toBeInTheDocument();
            expect(screen.getByText("127")).toBeInTheDocument();
        });
    });
});