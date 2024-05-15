export default interface ApiResult<T> {
    status?: string;
    data:   T;
}