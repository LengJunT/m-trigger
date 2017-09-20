import React from 'react';
import Trigger from './Trigger';
import ITriggerProps from './Proptypes';

function noop() {
}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

class TriggerWrap extends React.Component<ITriggerProps, any> {
  static displayName = 'TriggerWrap';

  static defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
  };

  triggerRef: any;

  constructor(props) {
    super(props);
    let popupVisible;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    this.state = {
      popupVisible,
    };
  }

  setPopupVisible(visible) {
    this.setState({
      popupVisible: visible,
    });
  }

  onTargetClick = () => {
    this.setPopupVisible(!this.state.popupVisible);
  }

  onClose = () => {
    this.setPopupVisible(false);
  }

  render() {
    return (
      <Trigger
        ref={el => this.triggerRef = el}
        {...this.props}
        visible={this.state.popupVisible}
        onTargetClick={this.onTargetClick}
        onClose={this.onClose}
      />
    );
  }
}

export default TriggerWrap;
