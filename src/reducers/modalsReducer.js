const modals = (state = {}, action) => {
    switch (action.type) {
    case 'STARTMODAL_TOGGLE':
      return Object.assign({}, state, {
          startModal: {
              isOpen: !state.startModal.isOpen,
              title: action.payload.title,
              content: action.payload.content,
              buttons: action.payload.buttons,
              type: action.payload.type,
            },
        });
    case 'ENDMODAL_TOGGLE':
      return Object.assign({}, state, {
          endModal: {
              isOpen: !state.endModal.isOpen,
              title: action.payload.title,
              content: action.payload.content,
              buttons: action.payload.buttons,
              type: action.payload.type,
            },
        });
    case 'INFOMODAL_CLOSE':
      return Object.assign({}, state, {
          infoModal: {
              isOpen: false,
            },
        });
    case 'INFOMODAL_OPEN':
      return Object.assign({}, state, {
          infoModal: {
              isOpen: true,
              title: action.payload.title,
              content: action.payload.content,
              buttons: action.payload.buttons,
              type: action.payload.type,
            },
        });
    default:
      return state;
  }
  };

export default modals;
