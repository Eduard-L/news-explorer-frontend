
class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  _checkResponse(response) {

    if (response.ok) {
      return response.json()

    }
    return Promise.reject(response.status)
  }

  async handleSignUp(email, password, name) {
    const response = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })

    })

    return this._checkResponse(response)
  }
  async handleSignIn(email, password) {
    const response = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,

      })

    })

    return this._checkResponse(response)
  }

  async getUserData(token) {
    const response = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return this._checkResponse(response)
  }

  async handleSaveArticle(keyWord, title, text, date, source, link, image, token) {
    const response = await fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "keyword": keyWord,
        "title": title,
        "text": text,
        "date": date,
        "source": source,
        "link": link,
        "image": image,
      })
    })
    return this._checkResponse(response)
  }

  async handleGetSavedArticles(token) {
    const response = await fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return this._checkResponse(response)
  }

  async deleteArticle(token, id) {
    const response = await fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return this._checkResponse(response)
  }

}


export default new MainApi('https://api.news-searcher.students.nomoreparties.sbs')