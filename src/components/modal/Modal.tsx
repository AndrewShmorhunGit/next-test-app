/** @jsxImportSource theme-ui */

import { ModalBackground } from "./Server";
import { ModalContent } from "./Client";

export function Modal() {
  return (
    <ModalBackground>
      <ModalContent />
    </ModalBackground>
  );
}
