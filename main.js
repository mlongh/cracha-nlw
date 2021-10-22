const LinksSocialMedia = {
  github: 'mlongh',
  youtube: 'emanuellilonghinotti',
  facebook: 'ilianelonghinotti',
  instagram: 'ilianelonghinotti',
  twitter: 'mlonghb'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //template string (```)
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}
//i= i+1=
//i++
//computador 0123456789
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
