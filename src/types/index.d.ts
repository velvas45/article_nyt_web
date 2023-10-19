export interface ResponseArticle {
  article: {
    _id: string;
    web_url: string;
    print_page: number;
    print_section: string;
    source: string;
    keywords: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    word_count: number;
    uri: string;
    pub_date: string;
    snippet: string;
    lead_paragraph: string;
    abstract: string;
    type_of_material: string;
    multimedia: {
      url: string;
      rank: number;
      subtype: string;
      caption: string;
      credit: string;
      type: string;
      crop_name: string;
      width: string;
      height: string;
      legacy: {
        xlarge: string;
        xlargewidth: number;
        xlargeheiht: number;
      };
    }[];
    headline: {
      main: string;
      kicker: string;
      content_kicker: string;
      print_headline: string;
      name: string;
      seo: string;
      sub: string;
    };
    byline: {
      original: string;
      person: {
        firstname: string;
        middlename: string;
        lastname: string;
        qualifier: string;
        title: string;
        role: string;
        organization: string;
        rank: string;
      }[];
      organization: string;
    };
  };
}
