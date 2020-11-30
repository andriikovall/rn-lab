export interface Action<TType, TPayload = undefined> {
  type: TType;
  payload: TPayload;
}
