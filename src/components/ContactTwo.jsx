
import "../pages/Contact.css";
export const Two = ({ input, handleSubmit, setInput }) => {
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
      <form onuSubmit={(e) => handleSubmit(e)}>
        <div className="cool">
          {" "}
          <label id="label" htmlFor="message">
            <h4>Message:</h4>
            <textarea
            id="mess_input"
             className="input"
              name="message"
              value={input.message}
               onChange={(e) => handleInput(e.target)}
            />
          </label>
        </div>

        <div className="input_btn">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};
