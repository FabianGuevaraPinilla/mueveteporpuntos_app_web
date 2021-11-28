import {isUndefined} from 'util';
import axios from "axios";
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export function calculaExpiracionSesion() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}
export function getAuth(){
    return !getSesion() ? false : true;
  }
  
export function getSesion(){
     return isUndefined(cookies.get('_s')) ? false: cookies.get('_s');
}

export function getRol(){
    return isUndefined(cookies.get('rol')) ? "NONE": cookies.get('rol')
}
export function getUsername(){
    return isUndefined(cookies.get('username')) ? "": cookies.get('username')
}
export function renovarSesion(){
    const sesion = getSesion();
    if (!sesion) window.location.href = '/login'
    cookies.set('_s', sesion, {
        path: '/',
        expires: calculaExpiracionSesion()
    })
}

export const request = {
    get: function(url){
        renovarSesion();
        return axios.get(url);
    }
}