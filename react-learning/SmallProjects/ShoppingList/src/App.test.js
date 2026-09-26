import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import App from "./App";

global.IS_REACT_ACT_ENVIRONMENT = true;

test("removing one duplicate keeps the other item and blank names are rejected", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  try {
    act(() => root.render(<App />));
    const form = container.querySelector("form");
    const input = form.elements.namedItem("item");
    for (const value of [" Milk ", "Milk", "   "]) {
      input.value = value;
      act(() => form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })));
    }
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelector("li").textContent).toBe("Milkx");
    act(() => container.querySelector("button.delete").click());
    expect(container.querySelectorAll("li")).toHaveLength(1);
    expect(container.querySelector("li").textContent).toBe("Milkx");
  } finally {
    act(() => root.unmount());
    container.remove();
  }
});
