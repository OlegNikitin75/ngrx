import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store'

export const COUNTER_KEY = 'counter'

export const increment = createAction('[COUNTER] increment')
export const decrement = createAction('[COUNTER] decrement')
export const clear = createAction('[COUNTER] clear')
export const changeUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{ updatedAt: number }>()
)

export interface CounterState {
  count: number
  updateAt?: number
}

export const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrement, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updateAt: action.updatedAt
  }))
)
export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY)
export const countSelector = createSelector(
  featureSelector,
  state => state.count
)
export const updatedAtSelector = createSelector(
  featureSelector,
  state => state.updateAt
)
