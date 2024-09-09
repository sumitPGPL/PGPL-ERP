import { api } from "@/lib/middleware/apiInceptor";
import { ORGANIZATION_URL } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/lib/helpers/handleErrors";
export const addOrganization = async (payload) => {
  try {
    let res = await api.post(ORGANIZATION_URL, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const updateOrganization = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${ORGANIZATION_URL}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const getOrganization = async ({ limit = 5, page = 1 }) => {
  try {
    let res = await api.get(ORGANIZATION_URL, {
      params: {
        limit: limit,
        page: page,
      },
    });
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const deleteOrganization = async (uuid) => {
  try {
    const res = await api.delete(`${ORGANIZATION_URL}/${uuid}`);
    toast.success(res.data.message);
  } catch (error) {
    handleError(error);
  }
};

export const loadProfile = async( ) =>{
  try {
    const res = await api.get(`${USERS}/profile`)
    return res.data.payload
  } catch (error) {
    handleError(error)
  }
}