import { flexCenter } from "app/styles/services/styles";

export const footerHight = 5.2;
export function Footer() {
  return (
    <div style={{ maxHeight: `${footerHight}rem`, ...flexCenter }}>
      <div>
        <a href="">Git hub</a>
        <a href="">Lined In</a>
        <a href="">Repository</a>
        <a href="">SSH Key</a>
      </div>
      <p>
        Developed by Andrew Shmorhun for testing porpoises. All rights reserved
      </p>
    </div>
  );
}
