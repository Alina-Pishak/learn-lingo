import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  transition: opacity var(--transition-dur-and-func),
    visiblity var(--transition-dur-and-func);
  overflow: hidden;
`;

export const ModalModal = styled.div`
  display: flex;
  flex-direction: column;
  top: 20%;
  left: auto;
  right: auto;
  position: absolute;
  width: 566px;
  /* height: 600px; */
  padding: 64px;
  border-radius: 30px;
  background-color: #fff;
`;

export const CloseModalModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
  margin-bottom: 20px;
`;

export const ModalText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
`;
