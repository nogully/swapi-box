export default class StarWars {
  constructor(data) {
    this.data = data;
  }

  filmCrawl(number) {
    console.log(this.data.films)
    return this.data.films.results[number].opening_crawl;
  }

}