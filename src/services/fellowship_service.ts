import * as api from "./requests/API";
import {Response} from "../types/RemoteResponse"
import { FellowshipService } from "../types/FellowshipService";

export const getFellowshipServices = async (date: string): Promise<Response<FellowshipService[]>>  => {
    return (await api.get(`/fellowship_services?date=${date}`, {})).data;
}