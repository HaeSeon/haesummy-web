import { useVisible } from "./useVisible";

export function useVisibleToggle() {
  const { visible, open, close, setVisible } = useVisible()

  function toggleVisible() {
    setVisible(prev => !prev)
  }
  return {
    visible, toggleVisible,
    open, close
  }
}