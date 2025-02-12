import { Observable } from 'rxjs';
import { filter, first, switchMap, throwIfEmpty, map } from 'rxjs/operators';

export class StoreService {
  waitForState<
    T extends { isLoading: boolean; error: Record<string, string> | null },
  >(state$: Observable<T | undefined>, firstEvent = false): Observable<T> {
    return state$.pipe(
      filter((state): state is T => state !== undefined), // Filter `undefined` values
      filter((state) => !state.isLoading), // Wait until loading is complete
      throwIfEmpty(
        () => new Error('State is undefined or loading did not finish'),
      ), // Check for an empty stream
      map((state) => {
        if (state.error) throw new Error(JSON.stringify(state.error)); // Check for errors
        return state;
      }),
      firstEvent
        ? first()
        : switchMap(
            (state) =>
              new Observable<T>((subscriber) => subscriber.next(state)),
          ), // Take only the first value if needed
    );
  }
}
