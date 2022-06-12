import { setMessages } from "../redux/actions/messages.ac"

export const copyToClipboard = async (content, message) => {
  await navigator.clipboard.writeText(content)
  if(message) setMessages({ status: true, message, level: 'info' })
}
