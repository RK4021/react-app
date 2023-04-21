import { useState } from "react";
import Form from "./components/expense-tracter/Form";
import ExpenseList from "./components/expense-tracter/ExpenseList";
import ExpensFilter from "./components/expense-tracter/ExpenseFilter";

function App() {
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "hasgd agsd hsdg ",
      amount: 20,
      category: "Groceries",
    },
    {
      id: 3,
      description: "hasgd agsd hsdg ",
      amount: 20,
      category: "Groceries",
    },
    {
      id: 2,
      description: "hasgd agsd hsdg ",
      amount: 20,
      category: "Utilities",
    },
    {
      id: 4,
      description: "hasgd agsd hsdg ",
      amount: 20,
      category: "Entertainments",
    },
  ]);

  const filteredExpenses = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  return (
    <div>
      <Form
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
            },
          ])
        }
      />
      <div className="mb-3">
        <ExpensFilter onSelect={(category) => setCategory(category)} />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;

// const items = ["New York", "San Francisco", "Tokyo", "London"];
// const handleSelectItem = (item: string) => {
//   console.log(item);
// };

// const [showAlert, setShowAlert] = useState(false);

// const handleShowAlert = () => {
//   setShowAlert(true);
// };
// const handleDisableAlert = () => {
//   setShowAlert(false);
// };
// return (
//   <>
//     {showAlert && (
//       <Alert onClose={handleDisableAlert}>This is an alert message</Alert>
//     )}
//     <Button text="Show Alert" onShow={handleShowAlert} />
//   </>
// );
