import { combineReducers } from '@reduxjs/toolkit';
import anime from './slices/anime';
import manga from './slices/manga';

export default combineReducers({ list: anime, listManga: manga });
