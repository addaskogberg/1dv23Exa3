
var getText = function (url, callback) {
  var xhr = new window.XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
  xhr.open('GET', url, true)
  xhr.setRequestHeader('Authorization', 'token 91486f6fcb2a852e0ef3b08bbdbb1161396c731a')
  xhr.send()
}

function mycallback (data) {
  var githubdata = JSON.parse(data)
  for (let i = 0; i < githubdata.length; i++) {
    var paragraph = githubdata[i].title +
     ' saying ' + githubdata[i].body +
     ' posted by ' + githubdata[i].user.login +
     ' at ' + githubdata[i].created_at
    var text = document.createTextNode(paragraph)
    var p = document.createElement('p')
    var img = document.createElement('img')
    img.setAttribute('src', githubdata[i].user.avatar_url)
    var div = document.createElement('div')
    div.setAttribute('class', 'issue')

    var issue = document.getElementById('issues')
    p.appendChild(text)
    div.appendChild(img)
    div.appendChild(p)
    issue.appendChild(div)
  }
}
getText('https://api.github.com/repos/1dv023/as224wq-examination-3/issues', mycallback)
