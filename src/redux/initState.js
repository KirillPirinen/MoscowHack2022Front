const initState = {
  isLoading: false,
  messages: { status: false },
  user: getUserState(),
  modal: { modalType: null, modalProps: {} },
  widget: { widgetType: 'CALENDAR', widgetProps: {} },
  calendar: {},
  tasks: { lastSearch: '', tasks: [], categories: null },
  category: {},
  taskDetail: {}
}

export default initState

function getUserState () {
  const stateFromLS = JSON.parse(window.localStorage.getItem("user"));
  return stateFromLS || {}
}
