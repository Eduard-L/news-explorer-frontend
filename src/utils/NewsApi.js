const API_KEY = '6422de520f344b469d07eb1a555210d2';
const BASE_URL = 'https://newsapi.org/v2/everything';
// const BASE_URL = 'https://nomoreparties.co/news/v2/everything';



class NewsApi {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`something went wrong, ${response.status}`)
  }

  async getArticles(searchWord, fromDate, toDate) {
    const response = await fetch(`${this.baseUrl}?q=${searchWord}&sortBy=popularity&pageSize=100&apiKey=${this.apiKey}`)
    console.log(fromDate, toDate)
    return this._checkResponse(response)
  }

}

export default new NewsApi(BASE_URL, API_KEY)