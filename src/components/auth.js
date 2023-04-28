import React from "react";
export const Auth = () => {
  const [password, setName] = useState("");
  const checkAuth = () => {
    if (password === "CommandoHappiness") {
      window.location.href = "/home";
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <>
      <Form centered>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={checkAuth} className="w-100 mb-4">
          Add
        </Button>
      </Form>
    </>
  );
};
