import api from "../../utils/api";
import ActionTypes from "../actionTypes";

// kategori verilerini alıp reducera bildiren thunk aksiyonu
export const getGenres = () => (dispatch) => {
  // yüklenmeninin başladığını reducer'a bildir
  dispatch({ type: ActionTypes.GENRE_LOADING });

  // api'dan kategorileri iste
  api
    .get("/genre/movie/list", { params: { language: "tr" } })
    // başarılı olursa reducer'a veriyi haber ver
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRE_SUCCESS,
        payload: res.data.genres,
      })
    )
    // başarısız olursa reducer'a hatayı haber ver
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRE_ERROR,
        payload: err.message,
      })
    );
};
