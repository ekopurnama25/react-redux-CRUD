import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getListContact = () => {
  //console.log("2. Masuk Action");
  return async (dispatch) => {
    //dispatch loading
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      //get API
      const res = await axios({
        method: "GET",
        url: "http://localhost:3000/contact",
        timeout: 120000,
      });
      // console.log("3. Get Contact Berhasil :", res.data);
      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: true,
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      //console.log("3. Gagal :", error.message);
      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: true,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const addContact = (data) => {
  //console.log("2. Masuk Action");
  return async (dispatch) => {
    //dispatch loading
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      //get API
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/contact",
        timeout: 120000,
        data: data,
      });
      //console.log("3. Get Contact Berhasil :", res.data);
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: true,
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      //console.log("3. Gagal :", error.message);
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: true,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const deleteContact = (id) => {
  console.log("2. Masuk Action");
  return async (dispatch) => {
    //dispatch loading
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      //get API
      const res = await axios({
        method: "DELETE",
        url: `http://localhost:3000/contact/${id}`,
        timeout: 120000,
      });
      console.log("3. Get Contact Berhasil :", res.data);
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: true,
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      console.log("3. Gagal :", error.message);
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: true,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const detailContact = (data) => {
  return async (dispatch) => {
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

export const updateContact = (data) => {
  //console.log("2. Masuk Action");
  return async (dispatch) => {
    //dispatch loading
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      //get API
      const res = await axios({
        method: "PUT",
        url: `http://localhost:3000/contact/${data.id}`,
        timeout: 120000,
        data: data,
      });
      //console.log("3. Get Contact Berhasil :", res.data);
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          loading: true,
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      //console.log("3. Gagal :", error.message);
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          loading: true,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};
