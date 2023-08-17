import {snippetsData} from './snippets';

export const getSnippet = (name:string):string|undefined =>{
   return snippetsData[name] ?? undefined;
}