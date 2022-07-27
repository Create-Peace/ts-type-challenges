type MyExclude<T, U> = T extends U ? never : T;
type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P]
}