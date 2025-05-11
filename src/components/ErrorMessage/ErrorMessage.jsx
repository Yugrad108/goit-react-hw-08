import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <div className={css.error}>
      Oops, something wrong! <br />
      {error}
    </div>
  );
};

export default ErrorMessage;
