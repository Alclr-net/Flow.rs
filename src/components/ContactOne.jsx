import "../pages/Contact.css";

export const One = ({ input, handleSubmit, setInput }) => {
  const handleInput = (event) => {
    const { name, value } = event;
    setInput((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <>
      {" "}
      <div className="thrilled">
        <p>We're thrilled that you are here! </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="cool">
          <label id="label" htmlFor="name">
            <h4> Your name:</h4>
            <input
              className="input"
              type="text"
              placeholder=""
              name="name"
              value={input.name}
              autoComplete="off"
              onChange={(e) => handleInput(e.target)}
            />
          </label>
          <label id="label" htmlFor="email">
            <h4>E-mail:</h4>
            <input
              className="input"
              type="email"
              placeholder=""
              name="email"
              value={input.email}
              autoComplete="off"
              onChange={(e) => handleInput(e.target)}
            />
          </label>
        </div>

        <div className="input_btn">
          {" "}
          <button type="submit">NEXT</button>
        </div>
      </form>
    </>
  );
};
