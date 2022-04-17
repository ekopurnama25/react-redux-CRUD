import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getListContact,
  updateContact,
} from "../../redux/actions/contactAction";

const AddContact = () => {
  const [name, setName] = useState("");
  const [no_hp, setNoHP] = useState("");
  const [id, setId] = useState("");

  const { addContactResult, detailContactResult, updateContactResult } =
    useSelector((state) => state.contactReducers);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      //console.log("1. MASUK HANDLE SUMBIT");
      //UPDATE
      dispatch(updateContact({ id: id, name: name, no_hp: no_hp }));
    } else {
      //console.log("1. MASUK HANDLE SUMBIT");
      //CREATE
      dispatch(addContact({ name: name, no_hp: no_hp }));
    }
  };

  useEffect(() => {
    if (addContactResult) {
      //console.log("5. Masuk Component Did Update");
      dispatch(getListContact());
      setName("");
      setNoHP("");
    }
  }, [addContactResult, dispatch]);

  useEffect(() => {
    if (detailContactResult) {
      setName(detailContactResult.name);
      setNoHP(detailContactResult.no_hp);
      setId(detailContactResult.id);
    }
  }, [detailContactResult, dispatch]);

  useEffect(() => {
    if (updateContactResult) {
      //console.log("5. Masuk Component Did Update");
      dispatch(getListContact());
      setName("");
      setNoHP("");
      setId("");
    }
  }, [updateContactResult, dispatch]);
  return (
    <div>
      <h2>{id ? "Update Contact" : "Add Contact"}</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
          placeholder="name ..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          name="no_hp"
          placeholder="No.HP ..."
          value={no_hp}
          onChange={(event) => setNoHP(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContact;
