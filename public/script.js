// TODO: Wire up the app's behavior here.
// NOTE: The TODOs are listed in index.html
function createUUID() {
  return 'xxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
async function getIt() {
  console.log('get it triggered')
  fetch('https://json-server-jchvgz--3000.local.webcontainer.io/api/v1/courses')
    .then((response) => response.json())
    .then((data) => {
      for (datum in data) {
        document.getElementById(
          'course'
        ).innerHTML += `<option value=${data[datum].id}>${data[datum].display}</option>`
      }
    })
}
function peekABoo(data) {
  if (data != 0) {
    document.getElementById('restOfBody').style.display = 'block'
  } else {
    document.getElementById('restOfBody').style.display = 'none'
  }
}
