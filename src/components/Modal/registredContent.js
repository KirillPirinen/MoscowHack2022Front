import { AuthForm } from '../Auth/AuthForm'
import { RegisterForm } from '../Auth/RegisterForm' 
import { EventSubscribtion } from '../Event/EvenSubscribtion'
import ActionAcception from '../ActionAcception'
import { CreateTask } from '../Task/CreateTask'

export default {
  'LOGIN': AuthForm,
  'REGISTRATION': RegisterForm,
  'EVENT': EventSubscribtion,
  'ACCEPTION' : ActionAcception,
  'CREATE_TASK': CreateTask,
}
