export default{
  openChild: (state, payload) => {
    const payloadIndex = state.openedChildren.indexOf(payload);
    if( payloadIndex === -1){
      state.openedChildren.push(payload);
    }
    else{
      state.openedChildren.splice(payloadIndex, 1);
    }
  }
}
