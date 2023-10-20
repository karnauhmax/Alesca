import Modal from "./modals";

const iFrame = document.querySelector('iframe');

new Modal('[data-modal="video"]', '[data-modal-open="video"]', beforeModalClose).renderModal();

 function beforeModalClose () {
  const iFrameSrc = iFrame.src;
  iFrame.src = iFrameSrc;
}
