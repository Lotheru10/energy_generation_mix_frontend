import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, it, expect } from "vitest";
import ChargingPage from "../pages/ChargingPage";

vi.mock("../api/api.tsx", () => ({
    getChargingWindow: vi.fn().mockResolvedValue({
        start: "2026-01-06T10:00:00Z",
        end: "2026-01-06T12:00:00Z",
        cleanPerc: 78.5,
    }),
}));

it("shows charging result after click", async () => {
    render(<ChargingPage />);
    await userEvent.click(screen.getByRole("button", { name: /check/i }));
    expect(await screen.findByText(/78\.5/)).toBeInTheDocument();
});
