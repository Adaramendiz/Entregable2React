import { kelvinTocelsius } from "./kelvinToCelsius"

export const kelvinToFarenheit = (kelvinDegrades) => {
  const celsius = kelvinTocelsius(kelvinDegrades);
  const farenheit_conversion = 9/5;
  const farenheit_initial_constant = 32;
  return celsius * farenheit_conversion + farenheit_initial_constant;
}