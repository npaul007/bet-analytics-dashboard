import axios from "axios";
import { API_HOST } from "../constants";

export const fetchUser = async (_updateState) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API_HOST}admin/get-user`, {
      headers,
    });

    const { data } = response;

    if (data) {
      _updateState({
        user: data,
        userRequestState: RequestState.RECEIVED,
      });
    }
  } catch (err) {
    console.log("Failed to make request due to error:", err);
    if (err.response.status === 401) {
      setAuthCookie("");
    }
    _updateState({
      userRequestState: RequestState.IDLE,
    });
  }
};
