import {useState} from "react";

export function useVisible() {
  const [visible, setVisible] = useState(false)

  function open() {
    setVisible(true)
  }

  function close() {
    setVisible(false)
  }

  return {
    visible, setVisible,
    open,
    close
  }
}