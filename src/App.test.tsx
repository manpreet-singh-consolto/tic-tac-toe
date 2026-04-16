I'll analyze the source code and create a comprehensive test file for the App component with all 20 test cases.
<function_calls>
<invoke name="read_file">
<parameter name="path">src</parameter>
</invoke>
</function_calls>
<function_calls>
<invoke name="list_files">
<parameter name="path">src</parameter>
</invoke>
</function_calls>
<function_calls>
<invoke name="bash">
<parameter name="command">find src -type f -name "*.tsx" -o -name "*.ts" | head -20</parameter>
</invoke>
</function_calls>

Now I'll create a comprehensive test file for the App component:

```typescript
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render app with initial empty board", () => {
    render(<App />);
    
    // Check that the board is rendered
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Should have 9 squares
    expect(squares).toHaveLength(9);
    
    // All squares should be empty
    squares.forEach(square => {
      expect(square.textContent).toBe("");
    });
  });

  it("should display correct player turn status", () => {
    render(<App />);
    
    const status = screen.getByText(/Next player: X/);
    expect(status).toBeInTheDocument();
  });

  it("should alternate between X and O players", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Click first square (X's turn)
    fireEvent.click(squares[0]);
    expect(screen.getByText(/Next player: O/)).toBeInTheDocument();
    
    // Click second square (O's turn)
    fireEvent.click(squares[1]);
    expect(screen.getByText(/Next player: X/)).toBeInTheDocument();
    
    // Click third square (X's turn)
    fireEvent.click(squares[2]);
    expect(screen.getByText(/Next player: O/)).toBeInTheDocument();
  });

  it("should prevent moves after game is won", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // X wins on diagonal: 0, 4, 8
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[4]); // X at 4
    fireEvent.click(squares[2]); // O at 2
    fireEvent.click(squares[8]); // X at 8 - X wins
    
    expect(screen.getByText(/Winner: X/)).toBeInTheDocument();
    
    // Try to click another square
    const initialContent = squares[3].textContent;
    fireEvent.click(squares[3]);
    
    // Square should not have changed
    expect(squares[3].textContent).toBe(initialContent);
  });

  it("should prevent moves on already filled squares", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Click first square
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe("X");
    
    // Try to click the same square again
    fireEvent.click(squares[0]);
    
    // Should still only have X, not XO
    expect(squares[0].textContent).toBe("X");
  });

  it("should detect winner on horizontal line", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // X wins on top row: 0, 1, 2
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[3]); // O at 3
    fireEvent.click(squares[1]); // X at 1
    fireEvent.click(squares[4]); // O at 4
    fireEvent.click(squares[2]); // X at 2 - X wins horizontally
    
    expect(screen.getByText(/Winner: X/)).toBeInTheDocument();
  });

  it("should detect winner on vertical line", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // X wins on left column: 0, 3, 6
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[3]); // X at 3
    fireEvent.click(squares[2]); // O at 2
    fireEvent.click(squares[6]); // X at 6 - X wins vertically
    
    expect(screen.getByText(/Winner: X/)).toBeInTheDocument();
  });

  it("should detect winner on diagonal line", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // X wins on main diagonal: 0, 4, 8
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[4]); // X at 4
    fireEvent.click(squares[2]); // O at 2
    fireEvent.click(squares[8]); // X at 8 - X wins diagonally
    
    expect(screen.getByText(/Winner: X/)).toBeInTheDocument();
  });

  it("should display winner message when game is won", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Create a winning scenario for O
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[3]); // O at 3
    fireEvent.click(squares[1]); // X at 1
    fireEvent.click(squares[4]); // O at 4
    fireEvent.click(squares[2]); // X at 2
    fireEvent.click(squares[5]); // O at 5 - O wins vertically
    
    expect(screen.getByText(/Winner: O/)).toBeInTheDocument();
  });

  it("should detect draw condition", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Create a draw: X O X / O X X / O X O
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[2]); // X at 2
    fireEvent.click(squares[3]); // O at 3
    fireEvent.click(squares[4]); // X at 4
    fireEvent.click(squares[6]); // O at 6
    fireEvent.click(squares[5]); // X at 5
    fireEvent.click(squares[8]); // O at 8
    fireEvent.click(squares[7]); // X at 7 - Draw
    
    expect(screen.getByText(/It's a Draw!/)).toBeInTheDocument();
  });

  it("should display draw message when game ends in draw", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Create a draw scenario
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[4]); // X
    fireEvent.click(squares[6]); // O
    fireEvent.click(squares[5]); // X
    fireEvent.click(squares[8]); // O
    fireEvent.click(squares[7]); // X
    
    const status = screen.getByText(/It's a Draw!/);
    expect(status).toBeInTheDocument();
  });

  it("should jump to previous game state", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Make some moves
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[2]); // X at 2
    
    // Verify current state
    expect(squares[0].textContent).toBe("X");
    expect(squares[1].textContent).toBe("O");
    expect(squares[2].textContent).toBe("X");
    
    // Click "Go to move #1" button
    const moveButtons = screen.getAllByRole("button").filter(btn => 
      btn.textContent.includes("Go to")
    );
    fireEvent.click(moveButtons[1]); // Go to move #1
    
    // Verify we're back at move 1
    expect(squares[0].textContent).toBe("X");
    expect(squares[1].textContent).toBe("O");
    expect(squares[2].textContent).toBe("");
  });

  it("should generate correct move history list", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Initially should have "Go to game start"
    expect(screen.getByText(/Go to game start/)).toBeInTheDocument();
    
    // Make a move
    fireEvent.click(squares[0]);
    expect(screen.getByText(/Go to move #1/)).toBeInTheDocument();
    
    // Make another move
    fireEvent.click(squares[1]);
    expect(screen.getByText(/Go to move #2/)).toBeInTheDocument();
  });

  it("should highlight current move in history", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Make some moves
    fireEvent.click(squares[0]); // Move 1
    fireEvent.click(squares[1]); // Move 2
    
    // Get all move history buttons
    const moveButtons = screen.getAllByRole("button").filter(btn => 
      btn.textContent.includes("Go to")
    );
    
    // The last move button should have the current-move class
    const currentMoveButton = moveButtons[moveButtons.length - 1];
    expect(currentMoveButton).toHaveClass("current-move");
    
    // Previous move should not have the class
    if (moveButtons.length > 1) {
      expect(moveButtons[moveButtons.length - 2]).not.toHaveClass("current-move");
    }
  });

  it("should restart game with empty board", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Make some moves
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[2]); // X at 2
    
    // Verify moves were made
    expect(squares[0].textContent).toBe("X");
    expect(squares[1].textContent).toBe("O");
    expect(squares[2].textContent).toBe("X");
    
    // Click restart button
    const restartButton = screen.getByRole("button", { name: /Restart Game/ });
    fireEvent.click(restartButton);
    
    // Get fresh references to squares after re-render
    const freshSquares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Board should be empty
    freshSquares.forEach(square => {
      expect(square.textContent).toBe("");
    });
    
    // Status should be reset
    expect(screen.getByText(/Next player: X/)).toBeInTheDocument();
  });

  it("should pass winning line to Board component", () => {
    const { container } = render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Create a winning condition
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[3]); // O at 3
    fireEvent.click(squares[1]); // X at 1
    fireEvent.click(squares[4]); // O at 4
    fireEvent.click(squares[2]); // X at 2 - X wins on top row
    
    // Look for winning-square class on the winning line [0, 1, 2]
    const winningSquares = container.querySelectorAll(".winning-square");
    expect(winningSquares.length).toBeGreaterThan(0);
  });

  it("should handle undo and continue game", () => {
    render(<App />);
    
    const squares = screen.getAllByRole("button").filter(btn => 
      btn.className.includes("square") || 
      (btn.textContent === "" && btn.className !== "restart-button")
    );
    
    // Make initial moves
    fireEvent.click(squares[0]); // X at 0
    fireEvent.click(squares[1]); // O at 1
    fireEvent.click(squares[2]); // X at 2
    
    // Jump back to move 1
    const moveButtons = screen.getAllByRole("button").filter(btn => 
      btn.textContent.includes("Go