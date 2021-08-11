import axios from 'axios';

export function infoDias(dia) {
    return axios.get(`https://api.jikan.moe/v3/schedule/${dia}`)
}

export function dataAnime(title){
    return axios.get(`https://api.jikan.moe/v3/search/anime?q=${title}`)
}