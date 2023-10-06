import { ViewerDefinition } from "./types";
import { getSnippet } from "../snippets";

export class ViewerRegistry<T extends ViewerDefinition> {

    viewers: Map<string, T>;

    count: number;

    constructor() {
        this.viewers = new Map();
        this.count = 0;

    }

    registerViewer(def: T) {
        const codeSnippet = getSnippet(def.name) ?? 'Code snippet not found for "'+def.name+'"';
        ++this.count;
        this.viewers.set(def.name, {...def, codeSnippet: codeSnippet , id: this.count});
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

