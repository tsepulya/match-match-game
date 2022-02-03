import { createHeader } from "./components/header/header";
import { createPageSettings } from "./containers/settings/settings";
import { createPageAbout } from "./containers/about/about";
import './style.css';
import { createPageScore } from "./containers/score/score";

createHeader();

window.onload = function createPageByHash() {
  if (window.location.hash === '') {
    createPageAbout();
  } 
  if (window.location.hash === '#about') {
    createPageAbout();
  } 
  if (window.location.hash === '#score') {
    createPageScore();
  } 
  if (window.location.hash === '#settings') {
    createPageSettings();
  } 
}