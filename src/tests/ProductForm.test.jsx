import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProductForm from "../components/admin/ProductForm";

describe("ProductForm", () => {
  it("submits a new product", async () => {
    const onSave = vi.fn().mockResolvedValue({ id: 4 });

    render(<ProductForm onSave={onSave} />);

    fireEvent.change(screen.getByLabelText("Product name"), {
      target: { value: "Fanta" },
    });

    fireEvent.change(screen.getByLabelText("Category"), {
      target: { value: "Soda" },
    });

    fireEvent.change(screen.getByLabelText("Price"), {
      target: { value: "150" },
    });

    fireEvent.change(screen.getByLabelText("Stock"), {
      target: { value: "10" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add product",
      }),
    );

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Fanta",
          category: "Soda",
          price: 150,
          stock: 10,
        }),
      );
    });

    expect(
      await screen.findByText("Product added successfully."),
    ).toBeInTheDocument();
  });
});

