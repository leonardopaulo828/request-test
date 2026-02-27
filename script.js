const button = document.querySelector('.test')
const divResponse = document.querySelector('.response')

const API_URL = 'https://manager-hitphone.omnihit.app.br/api/clients?domain=tozzinifreire.com.br'
const X_API_KEY = 'EAC611FBA2DA7728C9739E081A893768DC16662C9B52E7073CAA005A8E038FE8EAA4E79BFC6DCAE6DFC2A1BA6674559C1A45BE2276E80ABDB27293782BE2C907'

let result = ''

function ui(data){
  const list = `
    <ul>
      <li>${data._id}</li>
      <li>${data.clientName}</li>
      <li>${data.keycloakAdminPassword}</li>
      <li>${data.keycloakIPAddress}</li>
      <li>${data.keycloakRealm}</li>
      <li>${data.keycloakAdminUser}</li>
      <li>${data.enabled}</li>
      <li>${data.createdAt}</li>
    </ul>
  `

  return list
}

button.addEventListener('click', async () => {
  try{
    const response = await fetch(API_URL, {headers: {"x-api-key": X_API_KEY}})

    result = await response.json()

    divResponse.innerHTML = ui(result.data[0])
  }
  catch(err){
    console.log(err.message)

    divResponse.innerHTML = '<p>Erro</p>'
  }
})