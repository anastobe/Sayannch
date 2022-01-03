import { getApi } from "../../api/fakeApiUser"
import { base_url } from "../../utils/baseUrl"

export const getAppSettings = () => async (dispatch) => {
    dispatch({ type: "FETCH_APP_SETTING_REQUEST" })
    try {
        const { data } = await getApi(`${base_url}/get-global-settings`, "")
        
        if (data) {
            dispatch({ type: "FETCH_APP_SETTING_SUCCESS", payload: data.result })
        }

    } catch (error) {
        dispatch({ type: "FETCH_APP_SETTING_FAILED" })
    }
}