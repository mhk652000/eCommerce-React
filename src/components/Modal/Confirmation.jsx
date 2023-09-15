import { Col, Modal, Row } from "antd";
import React from "react";

import Button from "../Button";
import Text from "../Text";

const Confirmation = ({
  title = "COnfirmation modal",
  open,
  className,
  onCancel,
  onSubmit,
  children,
  ButtonText = "SUBMIT",
  fontFamily,
  fontSize = 18,
  gutter = [0, 24],
  isShowCancelButton = false,
  isShowSaveButton = false,
  cancelButtonText,
  onClickCancel,
  onClickSave,
  loading,
  closeable = true,
}) => {
  if (open) {
    return (
      <Modal
        open={true}
        className={className}
        onCancel={onCancel}
        closable={closeable}
        footer={null}
        visible={false}
      >
        <Row gutter={gutter} justify="center">
          <Col span={24}>
            <Row justify="center">
              <Col>
                <Text.Basic
                  fontFamily={fontFamily}
                  fontSize={fontSize}
                  text={title}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center" gutter={[0, 5]}>
              {children}
            </Row>
          </Col>
          <Col span={24}>
            <Row justify={"center"}>
              {isShowCancelButton && (
                <Col>
                  <Button.Basic
                    size={"large"}
                    text={cancelButtonText}
                    onClick={onClickCancel}
                  />
                </Col>
              )}
              {!isShowSaveButton && (
                <Col offset={isShowCancelButton && 1}>
                  <Button.Basic
                    type={"primary"}
                    size="large"
                    text={ButtonText}
                    onClick={onClickSave}
                    disabled={loading}
                    isShowLoader={loading}
                  />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  } else {
    return <></>;
  }
};
export default Confirmation;
