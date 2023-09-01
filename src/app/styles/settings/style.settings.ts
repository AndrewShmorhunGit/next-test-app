export class ColorSettings {
  white: string = "white";
  black: string = "black";
  error: string = "#d02b28";
  main_primary: string = "#7cb342";
  main_primary_dark: string = "#689e30";
  text_dark: string = "#343A40";
  background_main: string = "#ffffff";
  background_second: string = "#f0f3f5";
  background_third: string = "#cfd8dc";
  gradient_primary_to_error: string = `linear-gradient(270deg, ${this.main_primary} 0%, ${this.error} 100%)`;
  gradient_primary_to_primary_dark: string = `linear-gradient(270deg, ${this.main_primary} 0%, ${this.main_primary_dark} 100%)`;
}

export class StyleSettings {}
