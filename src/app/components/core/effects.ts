import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { add, loadApi, loadApiSuccess } from "./actions";
import { map, mergeMap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartEffects {

  constructor(private actions: Actions, private http: HttpClient) {}

  loadApiTestEffect = createEffect(
    () =>
    this.actions.pipe(
      ofType(loadApi),
      mergeMap(() =>
        {
          return this.http.get<any>('https://reqres.in/api/users').pipe(
            map((users: any) => loadApiSuccess({ users }))
          );
        }
      )
    )
  );
}
