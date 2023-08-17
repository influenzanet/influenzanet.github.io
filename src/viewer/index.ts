import { ViewerDefinition } from "./types";
import { getSnippet } from "../snippets";

export class ViewerRegistry<T extends ViewerDefinition> {

    viewers: Map<string, T>;

    constructor() {
        this.viewers = new Map();
    }

    registerViewer(def: T) {
        const codeSnippet = getSnippet(def.name) ?? 'Code snippet not found for "'+def.name+'"';

        this.viewers.set(def.name, {...def, codeSnippet: codeSnippet });
    }

    add(defs: T|T[]) {
        if(Array.isArray(defs)) {
            defs.forEach(d => {
                this.registerViewer(d)
            });
        } else {
            this.registerViewer(defs)
        }
    }

    get(name:string) {
        return this.viewers.get(name);
    }
}

