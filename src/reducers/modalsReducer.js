
const modals = (state = {}, action) => {
    switch (action.type) {
    case 'STARTMODAL_TOGGLE':
      return Object.assign({}, state, {

          startModal: {
              isOpen: !state.startModal.isOpen,
            },
        });
    case 'ENDMODAL_TOGGLE':
      return Object.assign({}, state, {
          endModal: {
              isOpen: !state.endModal.isOpen,
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
    case 'CONFIRM_MODAL_OPEN':
        return Object.assign({}, state, {
            confirmModal: {
                isOpen: true,
                deferedAction:action.payload.deferedAction,
                question:action.payload.question,
                content:action.payload.content,
            },
        });
    case 'CONFIRM_MODAL_CLOSE':
            return Object.assign({}, state, {
                confirmModal: {
                    isOpen: false,
                    deferAction:null
                },
            });
    default:
      return state;
  }
  };

export default modals;
