export const host = process.env.NODE_ENV !== 'production' ? 'http://localhost:5001' : 'https://presentsimple.online'

const endPoints = {
  signUp:"/api/v1/auth/signup",
  signIn:"/api/v1/auth/signin",
  signOut:"/api/v1/auth/signout",
  refresh:"/api/v1/auth/refresh",
  getCalendarEvents:"/api/v1/event/calendar",
  getFullUserInfo: "/api/v1/user?add=organizations",
  subscribeEvent: (event_id) => `/api/v1/event/${event_id}`,
  getEventById: (id) => `/api/v1/event/${id}?add=users`,
  getOrganizationInfoById: (id) => `/api/v1/organization/${id}?add=users`,
  getTasksByTextQuery: (text) => `/api/v1/tasks/search?text=${text}&add=users`,
  addNewTask: '/api/v1/tasks/create',
  getAllTasks: '/api/v1/tasks',
  getCategories: '/api/v1/tasks/getgategories',
  getTasks: (task_id, options = {}) => `/api/v1/tasks/specific/${task_id}?${new URLSearchParams(options).toString()}`,
  getTasksByCategory: (category_id, options = {}) => `/api/v1/tasks/category/${category_id}?${new URLSearchParams(options).toString()}`,
  getCategoryInfo: (category_id) => `/api/v1/category/${category_id}`,
  manipulateComment: (task_id) => `/api/v1/comment/${task_id}`,
  manipulateUser: `/api/v1/user`
}

export default endPoints;
