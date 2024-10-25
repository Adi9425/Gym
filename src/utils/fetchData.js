export const exerciseOptions =  {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4339cb0043msha7d44222b6f9f5dp19786ajsnc8ac6a59c038',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '4339cb0043msha7d44222b6f9f5dp19786ajsnc8ac6a59c038',
    },
};

export const fetchData = async(url,options)=>{
    const res = await fetch(url,options);
    const data = await res.json();

    return data;
}

