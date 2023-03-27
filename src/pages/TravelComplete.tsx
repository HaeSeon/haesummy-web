import { Button, message } from "antd"
import { useNavigate } from "react-router-dom"
import { Footer } from "../components/layouts/Footer"

export function TravelComplete() {
  const navigate = useNavigate()

  function handleCopyLink() {
    const link = `https://haesummy.com/travel/main`

    navigator.clipboard.writeText(link)
      .then(() => {
        message.open({
          content: "링크 복사 완료! ",
          icon: " 💜 ",
          style: {
            marginTop: "80vh",
          }
        })
      })
      .catch(() => {
        try {
          const textArea = document.createElement('textarea')
          document.body.appendChild(textArea)
          textArea.value = link
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          message.open({
            content: "링크 복사 완료!! ",
            icon: " 💜 ",
            style: {
              marginTop: "80vh",
            }
          })
        } catch {
          message.open({
            content: "링크 복사 실패 ",
            icon: " ❗ ",
            style: {
              marginTop: "80vh",
            }
          })
        }
      })
  }

  return <div>
    <h2>여행 성공</h2>
    <h3>축하합니다! 이 어려운걸 해냈어요!</h3>
    <div >
      <img src="/img/sample.png" alt="" width={"80%"} style={{ margin: "24px" }} />
      <Button onClick={() => { navigate('/travel/main') }} style={{ marginRight: "8px" }}>다시하기</Button>
      <Button
        type={"primary"}
        onClick={handleCopyLink}
        style={{ marginLeft: "8px" }}
      >
        공유하기
      </Button>
    </div>
    <Footer />
  </div>
}