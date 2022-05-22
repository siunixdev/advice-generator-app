
document.addEventListener("DOMContentLoaded", function (event) {
  renderAdvice()
})

async function renderAdvice() {
  let id = document.getElementById("id")
  let advice = document.getElementById("advice")

  id.innerHTML = 0
  advice.innerHTML = "Loading..."

  let url = "https://api.adviceslip.com/advice"

  const adviceJson = await fetch(url)
  const adviceResp = await adviceJson.json()

  let adviceId = adviceResp.slip ? adviceResp.slip.id : 0
  let adviceText = adviceResp.slip ? adviceResp.slip.advice : ""

  id.innerHTML = adviceId
  advice.innerHTML = adviceText
}
