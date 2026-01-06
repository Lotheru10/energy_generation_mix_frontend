import { render, screen } from "@testing-library/react";
import { vi, it, expect } from "vitest";
import GenerationPage from "../pages/GenerationPage";

vi.mock("../api/api.tsx", () => ({
    getGenerationMix: vi.fn().mockResolvedValue(
        [
            {
                date: "2026-01-06",
                cleanPerc: 60,
                averageUse: [{ fuel: "wind", perc: 20 }],
            },
        ],
    ),
}));

it("renders mix data", async () => {
    render(<GenerationPage />);
    expect(await screen.findByText("2026-01-06")).toBeInTheDocument();
});
