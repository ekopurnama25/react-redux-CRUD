import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  detailContact,
  getListContact,
} from "../../redux/actions/contactAction";
import contact from "../../redux/reducers/contact";

const ListContact = () => {
  const { getListContactResult, getListContactLoading, getListContactError } =
    useSelector((state) => state.contactReducers);
  const { deleteContactResult } = useSelector((state) => state.contactReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    // Call action getListContact
    //console.log("1. use effect component did mount");
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      //console.log("5. Masuk Component Did Update");
      dispatch(getListContact());
    }
  }, [deleteContactResult, dispatch]);
  return (
    <div>
      <h4>ListContact</h4>
      {getListContactResult ? (
        getListContactResult.map((contact) => {
          return (
            <p key={contact.id}>
              {contact.name} - {contact.no_hp} -{" "}
              <button
                onClick={() => dispatch(deleteContact(contact.id))}
                className="danger"
              >
                Delete
              </button>{" "}
              -{" "}
              <button onClick={() => dispatch(detailContact(contact))}>
                {" "}
                Update
              </button>
            </p>
          );
        })
      ) : getListContactLoading ? (
        <p>loading ....</p>
      ) : (
        <p>{getListContactError ? getListContactError : "datakosong"}</p>
      )}
    </div>
  );
};

export default ListContact;
