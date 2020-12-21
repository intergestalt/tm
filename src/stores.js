import { writable } from 'svelte/store';
import Cookies from 'js-cookie'

export const isMenuActive = writable(false);

export const isCookieAccepted = writable(false); 

export const isMeditationOn = writable(false); 


export const scrollY = writable(0);