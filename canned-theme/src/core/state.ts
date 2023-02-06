import { BehaviorSubject } from 'rxjs';
import { GlobalState } from "@/model/state.interface";
import { Singleton } from "typescript-ioc";

@Singleton
export class ThemeState extends BehaviorSubject<GlobalState | null> {};