
export interface ViewerDefinition {
    name: string;
    code?: string;
    json?: object // Optional json object use for json representation, default will use item object
    codeSnippet?: string // Snippet of code to show
}