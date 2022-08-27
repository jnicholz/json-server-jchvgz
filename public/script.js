// TODO: Wire up the app's behavior here.
// NOTE: The TODOs are listed in index.html
function createUUID() {
  return 'xxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
async function getCourses() {
  console.log('get Courses triggered')
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

async function checkIt(data){
  console.log(data)
  if (!isNaN(data)){
    if (data >9999999){
      console.log('it be 8 char' )
      document.getElementById('uvuIdDisplay').innerText = `Student Logs for ${data}`
      await getNotes(data)
    }
  }
}
async function getNotes(id){
  console.log('get notes triggered')
  fetch('https://json-server-jchvgz--3000.local.webcontainer.io/api/v1/logs')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // for (datum in data) {
      //   document.getElementById(
      //     'course'
      //   ).innerHTML += `<option value=${data[datum].id}>${data[datum].display}</option>`
      // }
    })
}