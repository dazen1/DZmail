import { useEffect, useState } from "react";

export function MailFilter({ filter, onChangeFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filter);
  useEffect(() => {
    onChangeFilter(filterByToEdit);
  }, [filterByToEdit]);

  function filterChangeHandler(ev) {
    let { value, type, id, name } = ev.target;
    console.log(value);
    if (name === "isRead") {
      value = JSON.parse(value);
    }
    // console.log('jsonParse',JSON.parse(value));
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [name]: value }));
  }
  // console.log(filterByToEdit);
  return (
    <form>
      <label htmlFor="search">Search</label>
      <input
        onChange={filterChangeHandler}
        type="search"
        id="search"
        name="textSearch"
        placeholder="Search"
      />
      <label htmlFor="read">Read</label>
      <input
        onChange={filterChangeHandler}
        type="radio"
        id="read"
        name="isRead"
        value={"true"}
      />
      <label htmlFor="unread">Unread</label>
      <input
        onChange={filterChangeHandler}
        type="radio"
        id="unread"
        name="isRead"
        value={"false"}
      />
      <label htmlFor="all">all</label>
      <input
        onChange={filterChangeHandler}
        type="radio"
        id="all"
        name="isRead"
        value={"null"}
      />
    </form>
  );
}
