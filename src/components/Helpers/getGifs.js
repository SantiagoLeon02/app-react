export async function getGifs(category){
    const url = `https://api.giphy.com/v1/gifs/search?api_key=STwQyYQ4KKZLkg7UwDEwwEtf87tuCkLC&q=${category}&limit=5`;
        const resp = await fetch(url);
        const {data } = await resp.json();
        // console.log(data);

        const gifs = data.map( img =>({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

    return gifs;
}