const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
  gym: ["01-01", "01-02", "01-06", "01-07", "01-08"],
  takePills: ["01-03"],
  study: ["01-02"],
}

nlwSetup.setData(data)
nlwSetup.load()
