import { useId } from "react";
import { wrapper, input } from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filterId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={wrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value.trim()))}
        className={input}
      />
    </div>
  );
};

export default SearchBox;
