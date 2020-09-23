import { combineReducers } from '@reduxjs/toolkit';
import anime from './slices/anime';

export default combineReducers({ list: anime });
