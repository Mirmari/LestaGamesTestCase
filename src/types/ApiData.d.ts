import TankDataType from "./TankDataType";

export type MetaType = {
    count: number;
    page_total: number;
    total: number;
    limit: number;
    page: number;
}

export default interface ApiData {
    status?: string;
    meta: MetaType;
    data: TankDataType;
    error?: any;
}